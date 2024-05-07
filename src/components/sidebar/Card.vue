<template>
  <div
    class="flex flex-col p-2 text-black bg-gray-200 h-40 rounded justify-between"
  >
    <div class="flex justify-between">
      <p>VueWallet</p>
      <img
        alt="Vue logo"
        class=""
        src="../../assets/logo.svg"
        width="35"
        height="35"
      />
    </div>
    <p class="text-3xl">{{ counter.count }}</p>
    <div>
      <div>
        <p>Username</p>
      </div>
      <div class="flex justify-between">
        <p>1234-1234-1234-1234</p>
        <p>09-29</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../../stores/counter";
export default {
  setup() {
    const counter = useCounterStore();

    return { counter };
  },
};
</script>
