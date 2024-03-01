import * as React from "react"

import {cn} from "@/lib/utils"
import {Icons} from "@/components/ui/icons.tsx";

export interface RichTextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const RichTextarea = React.forwardRef<HTMLTextAreaElement, RichTextareaProps>(
    ({className, ...props}, ref) => {
        return (
            <div>
                <div className="flex min-h-[40px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300">
                    <Icons.bold />
                    <Icons.italic />
                    <Icons.underline />
                    <Icons.listbullet />
                    <Icons.preformattedcode />
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
    }
)
RichTextarea.displayName = "Textarea"

export {RichTextarea}
