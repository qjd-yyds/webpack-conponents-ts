<template>
  <div class="app">我是app</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'app',
  props: {},
  setup: () => {
    onMounted(() => {});
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
