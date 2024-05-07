<template>
  <form @submit.prevent="handleReturn">
    <input
      required
      v-model="returnBalance"
      placeholder="Return balance"
      type="text"
    />
    <button>Return</button>
  </form>

  <Modal :isOpen="showModal" @update:isOpen="showModal = $event">
    <h1 class="text-lg font-bold mb-4">Error</h1>
    <p>Unable to return. Insufficient balance.</p>
  </Modal>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";

import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const counter = useCounterStore();
    const returnBalance = ref("");
    const showModal = ref(false);

    const handleReturn = () => {
      const returnAmount = parseFloat(returnBalance.value);
      if (!isNaN(returnAmount) && counter.saving - returnAmount >= 0) {
        counter.handleReturn(returnAmount); // Call handleReturn action from store with the specified return amount
        returnBalance.value = ""; // Clear return balance input field
      } else {
        showModal.value = true; // Display the modal
      }
    };

    return {
      returnBalance,
      handleReturn,
      showModal,
    };
  },
};
</script>
