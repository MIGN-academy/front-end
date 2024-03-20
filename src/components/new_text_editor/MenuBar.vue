<template>
  <div>
    <template v-for="(item, index) in items">
      <div
          class="divider"
          v-if="item.type === 'divider'"
          :key="`divider${index}`"
      />
      <menu-item :editor="editor" v-else :key="index" v-bind="item" />
    </template>
  </div>
</template>
<!--<template>-->
<!--  <button @click="makeBold">Click me for bold</button>-->
<!--</template>-->

<!--<script>-->
<!--  import { ref } from 'vue'-->

<!--  const bold = ref()-->

<!--  const makeBold = () => {-->
<!--    console.log('bold')-->
<!--  }-->
<!--</script>-->

<script>
import MenuItem from "@/components/new_text_editor/MenuItem.vue";

export default {
  components: {
    MenuItem,
  },
  props: {
    editor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          icon: "bold",
          title: "Bold",
          action: () => this.editor.chain().focus().toggleBold().run(),
        },
        {
          icon: "italic",
          title: "Italic",
          action: () => this.editor.chain().focus().toggleItalic().run(),
        },
        {
          icon: "strikethrough",
          title: "Strike",
          action: () => this.editor.chain().focus().toggleStrike().run(),
        },
        {
          icon: "align-left",
          title: "Align Left",
          action: () => this.editor.chain().focus().setTextAlign("left").run(),
        },
        {
          icon: "align-center",
          title: "Align Center",
          action: () =>
              this.editor.chain().focus().setTextAlign("center").run(),
        },
        {
          icon: "align-right",
          title: "Align Right",
          action: () => this.editor.chain().focus().setTextAlign("right").run(),
        },
        {
          icon: "align-justify",
          title: "Align Justify",
          action: () =>
              this.editor.chain().focus().setTextAlign("justify").run(),
        },
        {
          icon: "code-view",
          title: "Code",
          action: () => this.editor.chain().focus().toggleCode().run(),
        },
        {
          icon: "mark-pen-line",
          title: "Highlight",
          action: () => this.editor.chain().focus().toggleHighlight().run(),
        },
        {
          type: "divider",
        },
        {
          icon: "link",
          title: "Link",
          action: () => this.openLinkWindow(),
        },
        {
          icon: "image-line",
          title: "Image",
          action: () => this.openImageWindow(),
        },
        {
          icon: "movie-line",
          title: "External Video",
          action: () => this.openExternalVideoWindow(),
        },
        {
          icon: "window-line",
          title: "External Iframe",
          action: () => this.openExternalIframeWindow(),
        },
        {
          type: "divider",
        },
        {
          icon: "h-1",
          title: "Heading 1",
          action: () =>
              this.editor.chain().focus().toggleHeading({level: 1}).run(),
        },
        {
          icon: "h-2",
          title: "Heading 2",
          action: () =>
              this.editor.chain().focus().toggleHeading({level: 2}).run(),
        },
        {
          icon: "h-3",
          title: "Heading 3",
          action: () =>
              this.editor.chain().focus().toggleHeading({level: 3}).run(),
        },
        {
          icon: "h-4",
          title: "Heading 4",
          action: () =>
              this.editor.chain().focus().toggleHeading({level: 4}).run(),
        },
        {
          icon: "paragraph",
          title: "Paragraph",
          action: () => this.editor.chain().focus().setParagraph().run(),
        },
        {
          icon: "list-unordered",
          title: "Bullet List",
          action: () => this.editor.chain().focus().toggleBulletList().run(),
        },
        {
          icon: "list-ordered",
          title: "Ordered List",
          action: () => this.editor.chain().focus().toggleOrderedList().run(),
        },
        {
          icon: "code-box-line",
          title: "Code Block",
          action: () => this.editor.chain().focus().toggleCodeBlock().run(),
        }
      ]
    }
  }
}
</script>