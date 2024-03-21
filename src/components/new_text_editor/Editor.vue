<template>
  <menu-bar :editor="editor"></menu-bar>
  <editor-content class="border rounded-md" :editor="editor" />
</template>

<script setup>
import {EditorContent, useEditor} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TableHeader from "@tiptap/extension-table-header";
import Link from "@tiptap/extension-link";
import MenuBar from "@/components/new_text_editor/MenuBar.vue";
import BulletList from "@tiptap/extension-bullet-list";
import Bold from "@tiptap/extension-bold";

const CustomBulletList = BulletList.extend({
  addCommands() {
    return {
      ...this.parent?.(),
      toggleBulletClass: (className) => ({ commands }) => {
        return commands.updateAttributes("bulletList", { class: className });
      },
    };
  },
});

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

const editor = useEditor({
  content: '',
  extensions: [
    StarterKit,
    CustomBulletList,
    CustomTableHeader,
    CustomLink,
    Bold,
  ],
  editorProps: {
    attributes: {
      class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
    }
  }
})
</script>