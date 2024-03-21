<template>
  <button
    class="menu-item"
    :class="{ 'is-active bg-zinc-800 rounded-sm': isActive(editor) }"
    @click="(e) => {
      e.preventDefault();
      action();
    }"
    :title="title"
  >
    <i :class="`ri-${icon} ri-fw`"></i>
  </button>
</template>

<script>
import 'remixicon/fonts/remixicon.css';
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
    editor: {
      type: Object,
      required: true,
    }
  },
  methods: {
    async isActive(editor){
      return await editor.isActive('bold')
    }
  }
}
</script>
