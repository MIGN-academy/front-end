<template>
  <button class="menu-item" v-on:mouseover="isHovered = true" v-on:mouseout="isHovered = false"
    :class="{ 'bg-zinc-900 rounded-sm': isHovered && !isActive(editor), 'is-active bg-zinc-800 rounded-sm': isActive(editor) }"
    @click="(e) => {
      e.preventDefault();
      action();
    }" @mouseover="(e) => {
      e.preventDefault();

    }" :title="title">
    <i :class="`ri-${icon} ri-fw`"></i>
  </button>
</template>

<script>
import 'remixicon/fonts/remixicon.css';
export default {
  data() {
    return { isHovered: false }
  },
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
    isActive() {
      const headingRegex = /^Heading ([0-9])$/
      const headingMatch = this.title.match(headingRegex)
      if (headingMatch) {
        return !!this.editor && this.editor.isActive('heading', { level: Number(headingMatch[1]) });
      }
      return !!this.editor && this.editor.isActive(this.title.toLowerCase());
    }
  }
}
</script>