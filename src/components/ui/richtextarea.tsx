import * as React from "react"

import {cn} from "@/lib/utils"
import {Icons} from "@/components/ui/icons.tsx"
import {Button} from "@/components/ui/button.tsx"
import {useState} from "react"

export interface RichTextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const RichTextarea = React.forwardRef<HTMLTextAreaElement, RichTextareaProps>(({className, ...props}, ref) => {
    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [underline, setUnderline] = useState(false)
    const [listBullet, setListBullet] = useState(false)
    const [preformattedCode, setPreformattedCode] = useState(false)
    const [math, setMath] = useState(false)

    return (
        <div>
            <div
                className="flex min-h-[40px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300">
                <Button type='button' className={cn('text-zinc-200 bg-zinc-950 hover:text-zinc-100 hover:border-2 hover:bg-zinc-950', bold ? 'border-2 border-zinc-400' : '')} onClick={() => setBold(!bold)}>
                    <Icons.bold/>
                </Button>
                <Button className='text-zinc-200 bg-zinc-950 hover:text-zinc-100 hover:border-2 hover:bg-zinc-950' onClick={() => setItalic(!italic)}>
                    <Icons.italic/>
                </Button>
                <Button className='text-zinc-200 bg-zinc-950 hover:text-zinc-100 hover:border-2 hover:bg-zinc-950' onClick={() => setUnderline(!underline)}>
                    <Icons.underline/>
                </Button>
                <Button className='text-zinc-200 bg-zinc-950 hover:text-zinc-100 hover:border-2 hover:bg-zinc-950' onClick={() => setListBullet(!listBullet)}>
                    <Icons.listbullet/>
                </Button>
                <Button className='text-zinc-200 bg-zinc-950 hover:text-zinc-100 hover:border-2 hover:bg-zinc-950' onClick={() => setPreformattedCode(!preformattedCode)}>
                    <Icons.preformattedcode/>
                </Button>
                <Button className='text-zinc-200 bg-zinc-950 hover:text-zinc-100 hover:border-2 hover:bg-zinc-950' onClick={() => setMath(!math)}>
                    <Icons.math/>
                </Button>
            </div>
            <textarea
                className={cn(
                    "flex min-h-[160px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
                    className
                )}
                ref={ref}
                {...props}
            />
        </div>
    )
})
RichTextarea.displayName = "Textarea"

export {RichTextarea}
