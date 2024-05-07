<template>
  <form @submit.prevent="handleAdd" class="rounded-md">
    <input
      v-model="addBalance"
      placeholder="Add balance"
      type="text"
      class="p-2 border border-gray-400 rounded-md mr-2"
    />

    <button class="bg-green-500 text-white px-4 py-2 rounded-md">Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";
import Deposit from "./sidebar/Deposit.vue";

export default {
  setup() {
    const counter = useCounterStore();
    const addBalance = ref("");

    const handleAdd = () => {
      const addBalanceValue = parseFloat(addBalance.value);
      counter.handleAdd(addBalanceValue);
      addBalance.value = "";

      const currentDate = new Date().toLocaleDateString();

      counter.transaction.push({
        id: Math.floor(Math.random() * 10000),
        type: "Deposit",
        title: currentDate,
        amount: addBalanceValue,
      });
    };

    return {
      addBalance,
      handleAdd,
    };
  },
};
</script>
