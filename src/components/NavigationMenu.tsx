"use client"

import * as React from "react"

export function NavMenu() {
    return (
        <nav className="border-b-2 border-zinc-500 flex space-x-12 px-10 pb-3">
            <a href="/">
                Home
            </a>
            <a href="/articles">
                Articles
            </a>
            <a href="/newarticle">
                New Article
            </a>
        </nav>
    )
}
