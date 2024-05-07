<template>
  <nav
    class="flex flex-col h-screen bg-zinc-950 items-center py-5 justify-between text-white"
  >
    <div>
      <img
        alt="Vue logo"
        class=""
        src="../assets/logo.svg"
        width="35"
        height="35"
      />
      <div class="flex flex-col mt-10">
        <RouterLink to="/">
          <i class="bi bi-grid-fill" style="font-size: 2em"></i>
        </RouterLink>
        <RouterLink to="/about">
          <i class="bi bi-wallet2" style="font-size: 2em"></i>
        </RouterLink>
      </div>
    </div>
    <div class="">
      <RouterLink class="flex flex-col" to="/wallet">
        <i class="bi bi-box-arrow-right" style="font-size: 2em"></i>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
