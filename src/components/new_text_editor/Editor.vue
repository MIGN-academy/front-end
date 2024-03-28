<template>
  <menu-bar :editor="editor"></menu-bar>
  <editor-content class="border rounded-md" :editor="editor"/>
</template>

<script setup>
import {EditorContent, useEditor} from '@tiptap/vue-3'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import TableHeader from "@tiptap/extension-table-header";
import Link from "@tiptap/extension-link";
import MenuBar from "@/components/new_text_editor/MenuBar.vue";
import BulletList from "@tiptap/extension-bullet-list";
import Bold from "@tiptap/extension-bold";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Paragraph from "@tiptap/extension-paragraph";
import CodeBlock from "@tiptap/extension-code-block";
import CustomImage from "@/components/new_text_editor/extensions/CustomImage.js";
import Iframe from "./extensions/Iframe";
import "katex/dist/katex.min.css";
import MathExtension from "@aarkue/tiptap-math-extension";


const CustomBulletList = BulletList.extend({
  addCommands() {
    return {
      ...this.parent?.(),
      toggleBulletClass: (className) => ({commands}) => {
        return commands.updateAttributes("bulletList", {class: className});
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
    Iframe,
    Image,
    StarterKit,
    CustomBulletList,
    CustomTableHeader,
    CustomLink,
    Bold,
    CodeBlock.configure({
          HTMLAttributes: {
            class: 'border bg-zinc-700 p-2',
          }
        }
    ),
    Highlight,
    Paragraph,
    TextAlign.configure({
      types: ["heading", "paragraph", "image"],
    }),
    MathExtension.configure({
      evaluation: false
    }),
  ],
  editorProps: {
    attributes: {
      class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
    }
  }
})
</script>

<style scoped>
  .ProseMirror {
    min-height: 600px;
    max-height: 600px;
    overflow: scroll;
  }
</style>