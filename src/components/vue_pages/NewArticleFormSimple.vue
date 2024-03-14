<script setup lang="ts">
import {ref} from "vue";

const title = ref('');
</script>

<template>
<form>
  <input :value="title" />
  <button>Submit</button>
</form>
</template>