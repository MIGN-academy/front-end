<template>
  Hi
 <node-view-wrapper>
   <img :class="this.node.attrs.class" :src="this.node.attrs.src" :width="node.attrs.width" :height="node.attrs.height">
 </node-view-wrapper>
 <ImageWindow :editor="this.editor" :attributes="this.node.attrs" />
</template>

<script>
  import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3'
  import ImageWindow from '@/components/new_text_editor/windows/ImageWindow.vue'

  export default {
    components: {
      NodeViewWrapper,
      ImageWindow
    },
    props: nodeViewProps,
    data() {
      return {
        //
      }
    },
    methods: {
      onClick() {
        const windowInstance = new ImageCtor({
          propsData: {
            editor: this.editor,
            attributes: this.node.attrs
          }
        })
        windowInstance.$mount()
        document.querySelector('body').appendChild(windowInstance.$el)
      }
    },
    mounted() {
      //
    }
  }
</script>
