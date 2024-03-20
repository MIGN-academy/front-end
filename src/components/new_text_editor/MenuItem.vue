<template>
  <!--button
    class="menu-item"
    :class="{ 'is-active': isActive ? isActive(): null, 'is-disabled': can ? !can(): false }"
    @click="action"
    :title="title"
    :disabled="can ? !can() : false"
  >
    <svg class="remix">
      <use :xlink:href="`${remixiconUrl}#ri-${icon}`" />
    </svg>
  </button>-->
  <button
    class="menu-item"
    @click="action"
    :title="title"
  >
    <Icon name="ri:attachment-fill" />
<!--    <svg>-->
<!--      <use href="@/assets/bold.svg" />-->
<!--      <use xlink:href="remixicon/icons/Editor/bold.svg" />-->
<!--    </svg>-->
<!--    <svg class="remix">-->
<!--      <use :xlink:href="`remixicon/fonts/remixicon.symbol.svg#ri-bold`" />-->
<!--      <use :xlink:href="`${remixiconUrl}#ri-${icon}`" />-->
<!--    </svg>-->
  </button>
</template>

<script>
import { Icon } from 'astro-icon/components'

import BoldIcon from '@/assets/bold.svg'
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
    /*isActive: {
      type: Function,
      default: null,
    },
    can: {
      type: Function,
      default: null
    }*/
  },

  data() {
    return {
      Icon,
      BoldIcon,
    }
  },
}

</script>
