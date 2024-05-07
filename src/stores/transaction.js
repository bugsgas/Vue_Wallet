// transaction.js
import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transaction", {
  state: () => ({
    submittedValues: [],
    decrementedValues: [],
  }),
  actions: {
    addSubmittedValue(value) {
      this.submittedValues.push(value);
    },
    addDecrementedValue(value) {
      this.decrementedValues.push(value);
    },
  },
});
