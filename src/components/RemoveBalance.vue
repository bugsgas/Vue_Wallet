<template>
  <div>
    <form @submit.prevent="handleRemove">
      <input
        required
        v-model="removeBalance"
        placeholder="Subtract balance"
        type="text"
        class="p-2 border border-gray-400 rounded-md mr-2"
      />
      <select
        v-model="selectedOption"
        class="p-2 border border-gray-400 rounded-md mr-2"
      >
        <option value="transfer">Transfer</option>
        <option value="payment">Payment</option>
      </select>
      <div v-if="selectedOption === 'transfer'">
        <input
          required
          v-model="transferTo"
          placeholder="Transfer to"
          type="text"
          class="p-2 border border-gray-400 rounded-md mr-2"
        />
        <input
          required
          v-model="accountNumber"
          placeholder="Account number"
          type="text"
          class="p-2 border border-gray-400 rounded-md mr-2"
        />
      </div>

      <div v-if="selectedOption === 'payment'">
        <select
          required
          v-model="paymentFor"
          class="p-2 border border-gray-400 rounded-md mr-2"
        >
          <option value="">Select Payment For</option>
          <option value="Bills">Bills</option>
          <option value="Top Up">Top Up</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>
      <button
        class="bg-green-500 text-white px-4 py-2 rounded-md"
        :disabled="!isSubtractButtonClickable"
      >
        Subtract
      </button>
    </form>

    <!-- Modal -->
    <Modal :isOpen="showModal" @update:isOpen="showModal = $event">
      <h1 class="text-lg font-bold mb-4">Error</h1>
      <p>Cannot exceed balance amount.</p>
    </Modal>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useCounterStore } from "../stores/counter";
import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const counter = useCounterStore();
    const removeBalance = ref("");
    const selectedOption = ref("");
    const transferTo = ref("");
    const paymentFor = ref("");
    const accountNumber = ref("");
    const showModal = ref(false);

    const transaction = counter.transaction;

    // Computed property to check if all input fields are filled
    const isSubtractButtonClickable = computed(() => {
      if (selectedOption.value === "transfer") {
        return (
          transferTo.value.trim() !== "" &&
          accountNumber.value.trim() !== "" &&
          removeBalance.value.trim() !== ""
        );
      } else if (selectedOption.value === "payment") {
        return (
          paymentFor.value.trim() !== "" && removeBalance.value.trim() !== ""
        );
      }
      return false;
    });

    const handleRemove = () => {
      const decrement = parseFloat(removeBalance.value);
      if (!isNaN(decrement)) {
        if (counter.count - decrement >= 0) {
          counter.handleRemove(decrement);
          removeBalance.value = "";

          // Add transaction details
          counter.transaction.push({
            id: Math.floor(Math.random() * 10000),
            type: selectedOption.value === "transfer" ? "Transfer" : "Payment",
            title:
              selectedOption.value === "transfer"
                ? transferTo.value
                : paymentFor.value,
            amount: decrement,
            // Include accountNumber if the selected option is "transfer"
            accountNumber:
              selectedOption.value === "transfer" ? accountNumber.value : null,
          });
          // Clear input fields
          selectedOption.value = ""; // Reset selectedOption
          transferTo.value = ""; // Reset transferTo
          accountNumber.value = ""; // Reset accountNumber
          paymentFor.value = ""; // Reset paymentFor
        } else {
          showModal.value = true; // Display the modal
        }
      }
    };

    return {
      removeBalance,
      handleRemove,
      showModal,
      selectedOption,
      accountNumber,
      transferTo,
      paymentFor,
      transaction,
      isSubtractButtonClickable,
    };
  },
};
</script>
