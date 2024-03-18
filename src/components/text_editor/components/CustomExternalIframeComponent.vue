<template>
  <node-view-wrapper>
    <div class="resp-container">
      <iframe
        :src="this.node.attrs.src"
        :width="node.attrs.width"
        :height="node.attrs.height"
      />
    </div>
  </node-view-wrapper>
</template>

<script>
  import Vue from '@astrojs/vue'
  import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3'

  export default {
    components: {
      NodeViewWrapper,
    },
    props: nodeViewProps,
    data() {
      return {
        //
      }
    },
    methods: {
      //
    },
    mounted() {
      //
    }
  }
</script>
