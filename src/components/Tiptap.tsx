import {type Editor, mergeAttributes} from '@tiptap/react'
import {Bold, Strikethrough, Italic, List, ListOrdered, Code, Image as ImageIcon, Divide} from 'lucide-react'
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Button} from "@/components/ui/button.tsx"
import {TipTapCustomImage} from '@/lib/image'

import * as Toolbar from '@radix-ui/react-toolbar'
import {useState} from "react";

type ToolbarProps = {
    editor: Editor | null
}

async function upload() {  // arg: file: string | Blob
    let formData = new FormData()
    // formData.append('file', file)
    const headers = {'Content-Type': 'multipart/form-data'}
    const response = 1;
    return {'src': 'https://helios-i.mashable.com/imagery/articles/04i1KeWXNed98aQakEZjeOs/hero-image.fill.size_1248x702.v1623362896.jpg'}
}

function RTFToolbar({editor}: ToolbarProps) {
    if (!editor) {
        return null
    }
    return (
        <div className='border border-input bg-transparent rounded-t-md'>
            <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
                <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem p-4 hover:bg-zinc-700"
                        value="bold"
                        aria-label="Bold"
                        onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                        <Bold/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem p-4 hover:bg-zinc-700"
                        value="italic"
                        aria-label="Italic"
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                    >
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
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="list"
                                        aria-label="List"
                                        onClick={() => editor.chain().focus().toggleBulletList().run()}>
                        <List/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="listordered"
                                        aria-label="List ordered"
                                        onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                        <ListOrdered/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="code"
                                        aria-label="Code"
                                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                        <Code/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="image"
                                        aria-label="Image" onClick={() => {
                        const image = TipTapCustomImage(upload())
                    }}>
                        <ImageIcon/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem className="ToolbarToggleItem p-4 hover:bg-zinc-700" value="math"
                                        aria-label="Math" onClick={() => editor.chain().focus().run()}>
                        <Divide/>
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
                class: 'rounded-md border min-h-[600px] border-input bg-back p-8'
            },
        },
        onUpdate({editor}) {
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