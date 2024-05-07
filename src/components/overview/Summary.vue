<template>
  <p class="text-lg font-bold mb-3">My Summary</p>
  <div class="flex flex-row space-x-3">
    <div
      v-for="summary in Summarys"
      :key="summary.name"
      class="justify-between flex bg-zinc-900 rounded-lg w-full h-20"
    >
      <div class="flex">
        <div :class="summary.color" class="rounded-l-lg w-5 mr-3"></div>
        <div class="flex flex-col justify-center text-white">
          <p>{{ summary.name }}:</p>
          <p>{{ summary.number }} IDR</p>
        </div>
      </div>

      <div
        class="flex flex-col justify-center bg-zinc-800 text-white rounded-r-lg px-2"
      >
        <RouterLink :to="summary.link">
          <i class="bi bi-arrow-right" style="font-size: 2em"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../../stores/counter";
import { computed } from "vue";

export default {
  setup() {
    const counter = useCounterStore();

    const Summarys = computed(() => [
      {
        color: "bg-green-600",
        name: "My Balances",
        number: counter.count,
        link: "/save",
      },
      {
        color: "bg-blue-600",
        name: "My Savings",
        number: counter.saving,
        link: "/save",
      },
      {
        color: "bg-red-600",
        name: "My Expenses",
        number: counter.expense,
        link: "/save",
      },
    ]);

    return { counter, Summarys };
  },
};
</script>
