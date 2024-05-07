import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 5000,
    saving: 0,
    expense: 0,
    transaction: [],
  }),
  getters: {
    deposit() {
      return this.transaction.filter((t) => t.type === "Deposit");
    },
    payment() {
      return this.transaction.filter((t) => t.type === "Payment");
    },
    transfer() {
      return this.transaction.filter((t) => t.type === "Transfer");
    },
    save() {
      // Assuming you have a specific type for saving
      return this.transaction.filter((t) => t.type === "Save");
    },
    return() {
      // Assuming you have a specific type for return
      return this.transaction.filter((t) => t.type === "Return");
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    handleAdd(addBalanceValue) {
      if (!isNaN(addBalanceValue)) {
        this.count += addBalanceValue;
      }
    },
    handleRemove(decrement) {
      if (!isNaN(decrement)) {
        if (this.count - decrement >= 0) {
          // Decrement count
          this.count -= decrement;
          // Add to expense
          this.expense += decrement;
        }
      }
    },
    handleSave(saveAmount) {
      if (!isNaN(saveAmount) && this.count - saveAmount >= 0) {
        this.count -= saveAmount;
        this.saving += saveAmount; // Increment saving amount
      }
    },
    handleReturn(returnAmount) {
      if (!isNaN(returnAmount) && this.saving - returnAmount >= 0) {
        this.count += returnAmount; // Return specific amount back to count
        this.saving -= returnAmount; // Decrement saving amount by the returned amount
      }
    },
  },
});
