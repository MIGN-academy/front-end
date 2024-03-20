<template>
  <menu-bar :editor="editor"></menu-bar>
  <editor-content :editor="editor" />
</template>

<script setup>
import {EditorContent, useEditor} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TableHeader from "@tiptap/extension-table-header";
import Link from "@tiptap/extension-link";
import MenuBar from "@/components/new_text_editor/MenuBar.vue";

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
  ],
})

const CustomTableHeader = TableHeader.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      colwidth: {
        default: null,
        parseHTML: (element) => {
          const colwidth = element.getAttribute("colwidth");
          return colwidth ? [parseInt(colwidth, 10)] : null;
        },
        renderHTML: (attributes) => {
          return {
            colwidth: attributes.colwidth,
            style: attributes.colwidth
              ? `width: ${attributes.colwidth}px`
              : null,
          };
        },
      },
    };
  },
});

const CustomLink = Link.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      rel: {
        default: null,
      },
    };
  },
});
</script>