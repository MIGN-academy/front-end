import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {useEffect, useMemo, useState} from "react";

export const TiptapDisplay = (content: string) => {
  const [editable, setEditable] = useState(false)
  const editor = useEditor({
    editable,
    content: JSON.stringify(content['content']),
    extensions: [StarterKit],
  })

  useEffect(() => {
    if (!editor) {
      return undefined
    }

    editor.setEditable(editable)
  }, [editor, editable])

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}