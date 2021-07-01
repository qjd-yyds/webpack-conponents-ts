<template>
  <div class="app">{{ a }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'APP',
  setup() {
    let a = ref(1);
    return {
      a,
    };
  },
});
</script>

<style scoped></style>
