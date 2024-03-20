import * as React from "react"

import {cn} from "@/lib/utils"

export interface RichTextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const RichTextarea = React.forwardRef<HTMLTextAreaElement, RichTextareaProps>(({className, ...props}, ref) => {
    return (
        <div>
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
