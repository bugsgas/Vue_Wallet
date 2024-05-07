<template>
  <div class="flex-col">
    <p class="text-3xl font-bold mb-9">Hello, Username!</p>
    <Summary />
  </div>
</template>

<script>
import Summary from "../components/overview/Summary.vue";
export default {
  components: { Summary },
};
</script>

<style lang="scss" scoped></style>
