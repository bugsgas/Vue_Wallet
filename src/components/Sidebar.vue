<template>
  <div class="bg-zinc-950 py-5 px-8 justify-between flex flex-col">
    <Card />

    <Deposit />
  </div>
</template>

<script>
import Card from "./sidebar/Card.vue";
import Deposit from "./sidebar/Deposit.vue";

export default {
  name: "Sidebar",
  components: { Card, Deposit },
};
</script>
