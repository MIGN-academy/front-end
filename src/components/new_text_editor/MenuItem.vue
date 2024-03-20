<template>
  <button
    class="menu-item"
    :class="{ 'is-active': isActive ? isActive(): null, 'is-disabled': can ? !can(): false }"
    @click="(e) => {
      e.preventDefault();
      action();
    }"
    :title="title"
    :disabled="can ? !can() : false"
  >
    <i :style="{color: can ? 'inherit' : '#888'}" :class="`ri-${icon} ri-fw`"></i>
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
    isActive: {
      type: Function,
      default: () => false,
    },
    can: {
      type: Function,
      default: () => true
    }
  },
}

</script>
