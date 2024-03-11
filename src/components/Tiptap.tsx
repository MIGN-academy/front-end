import {type Editor} from '@tiptap/react'
import {Bold, Strikethrough, Italic, List, ListOrdered, Code} from 'lucide-react'
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Button} from "@/components/ui/button.tsx"

import * as Toolbar from '@radix-ui/react-toolbar'
import {useState} from "react";

type ToolbarProps = {
    editor: Editor
}

function RTFToolbar({editor}: ToolbarProps) {
    if (!editor) {
        return null
    }
    return (
        <div className='border border-input bg-transparent rounded-t-md'>
            <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
            <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="bold" aria-label="Bold" onClick={() => editor.chain().focus().toggleBold().run()}>
                        <Bold/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="italic" aria-label="Italic" onClick={() => editor.chain().focus().toggleItalic().run()}>
                        <Italic/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem p-4 hover:bg-zinc-700"
                        value="strikethrough"
                        aria-label="Strike through"
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                    >
                        <Strikethrough/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="list" aria-label="List" onClick={() => editor.chain().focus().toggleBulletList().run()}>
                        <List/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="listordered" aria-label="List ordered" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                        <ListOrdered/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="code" aria-label="Code" onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                        <Code/>
                    </Toolbar.ToggleItem>
                </Toolbar.ToggleGroup>
            </Toolbar.Root>
        </div>
    )
}

type TiptapProps = {
    description: string
    onChange: (richText: string) => void
}
export default function Tiptap({description, onChange}: TiptapProps) {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: description,
        editorProps: {
            attributes: {
                class: 'rounded-md border min-h-[600px] border-input bg-back p-2'
            },
        },
        onUpdate({editor}) {
            // document.getElementsByName(name).values()[0] = editor.getHTML()
            console.log(editor.getHTML())
            onChange(editor.getHTML())
        }
    })

    return (
        <div>
            <RTFToolbar editor={editor}/>
            <EditorContent editor={editor}/>
        </div>
    )
}