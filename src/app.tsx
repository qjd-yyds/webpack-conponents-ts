import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'app',
  setup() {
    const a = ref(1);
    return <div>{a}</div>;
  },
});
