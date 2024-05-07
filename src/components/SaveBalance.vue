<template>
  <form @submit.prevent="handleSave">
    <input
      required
      v-model="saveBalance"
      placeholder="Save balance"
      type="text"
    />
    <button>Save</button>
  </form>
  <!-- Modal -->
  <Modal :isOpen="showModal" @update:isOpen="showModal = $event">
    <h1 class="text-lg font-bold mb-4">Error</h1>
    <p>Unable to save. Insufficient balance.</p>
  </Modal>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";

import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const counter = useCounterStore();
    const saveBalance = ref("");
    const showModal = ref(false);

    const handleSave = () => {
      const saveAmount = parseFloat(saveBalance.value);
      if (!isNaN(saveAmount) && counter.count - saveAmount >= 0) {
        counter.handleSave(saveAmount);
        saveBalance.value = "";
      } else {
        showModal.value = true;
      }
    };

    return {
      saveBalance,
      handleSave,
      showModal,
    };
  },
};
</script>
