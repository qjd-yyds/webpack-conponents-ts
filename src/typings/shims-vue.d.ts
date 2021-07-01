declare module '*.vue' {
  import { defineComponent } from 'vue';

  const component: defineComponent<{}, {}, any>;
  export default component;
}
