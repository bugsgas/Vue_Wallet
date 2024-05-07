<template>
  <div>
    <Summary />

    <AddBalance />
    <RemoveBalance />
    <SaveBalance />
    <ReturnBalance />

    <p v-if="showCannotDecrementMessage">Cannot exceed balance amount</p>
    <!-- Transaction Details -->
    <TransactionList />
  </div>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";
import Summary from "../components/overview/Summary.vue";
import TransactionList from "../components/overview/TransactionList.vue";
import AddBalance from "../components/AddBalance.vue";
import RemoveBalance from "../components/RemoveBalance.vue";
import SaveBalance from "../components/SaveBalance.vue";
import ReturnBalance from "../components/ReturnBalance.vue";

export default {
  components: {
    Summary,
    TransactionList,
    AddBalance,
    RemoveBalance,
    SaveBalance,
    ReturnBalance,
  },
  setup() {
    const counter = useCounterStore();
    const showCannotDecrementMessage = ref(false);

    return {
      counter,
      showCannotDecrementMessage,
    };
  },
};
</script>
