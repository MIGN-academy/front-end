import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const TiptapDisplay = (content: any) => {
  const editor = useEditor({
    editable: false,
    content: JSON.stringify(content['content']),
    extensions: [StarterKit],
  })

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}