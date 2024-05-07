<template>
  <div
    class="flex flex-col p-2 bg-gray-200 h-20 rounded justify-center items-center"
  >
    <form @submit.prevent="handleAdd" class="rounded-md">
      <input
        v-model="addBalance"
        placeholder="Add balance"
        type="text"
        class="p-2 border border-gray-400 rounded-md mr-2"
      />
      <button class="bg-green-500 text-white px-4 py-2 rounded-md">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../../stores/counter";
import { useTransactionStore } from "../../stores/transaction"; // Import useTransactionStore

export default {
  components: {},
  setup() {
    const counter = useCounterStore();
    const transaction = useTransactionStore(); // Define transaction

    const addBalance = ref("");

    const handleAdd = () => {
      const addBalanceValue = parseFloat(addBalance.value);
      counter.handleAdd(addBalanceValue, transaction); // Use transaction here
      addBalance.value = "";
    };

    return {
      counter,
      handleAdd,
      addBalance,
    };
  },
};
</script>
