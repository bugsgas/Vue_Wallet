<template>
  <h2>Transaction Details:</h2>
  <div class="transaction-list-container">
    <div
      v-if="transactions && transactions.length > 0"
      class="transaction-list"
    >
      <ul>
        <li
          v-for="(transaction, index) in transactions"
          :key="index"
          :class="[
            'justify-between',
            'items-center',
            'px-5',
            'flex',
            'bg-zinc-900',
            'rounded-lg',
            'w-full',
            'h-20',
            'text-white',
            'my-2',
          ]"
        >
          <div class="flex">
            <i
              v-if="transaction.type === 'Deposit'"
              class="bi bi-arrow-down-square-fill mr-5 text-green-600"
              style="font-size: 2em"
            ></i>
            <i
              v-else
              class="bi bi-arrow-up-square-fill mr-5 text-red-600"
              style="font-size: 2em"
            ></i>
            <div class="d">
              <div class="text-2xl">
                <div v-if="transaction.type === 'Transfer'" class="flex">
                  <p>
                    {{ transaction.title }}
                    <span class="opacity-25"
                      >({{ transaction.accountNumber }})</span
                    >
                  </p>
                </div>
                <div v-else>
                  <p>{{ transaction.title }}</p>
                </div>
              </div>
              <p>Type: {{ transaction.type }}</p>
            </div>
          </div>
          <p class="text-3xl">${{ transaction.amount }}</p>
        </li>
      </ul>
    </div>
    <div v-else>No transaction</div>
  </div>
</template>

<script>
import { useCounterStore } from "../../stores/counter";

export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const counter = useCounterStore();
    const transactions = counter.transaction;

    return {
      transactions,
    };
  },
};
</script>

<style scoped>
.transaction-list-container {
  height: 350px; /* Set a fixed height for the container */
  overflow-y: auto; /* Enable vertical scrolling */
}

/* Add your component-specific styles here */
</style>
