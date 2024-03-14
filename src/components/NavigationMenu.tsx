import * as React from "react"
import {useEffect, useState} from "react";

import axios from 'axios'
import {useStore} from "@nanostores/react";
import {$client} from "@/lib/stores.ts";

export function NavMenu() {
    const client = useStore($client)
    const [currentUser, setCurrentUser] = useState(false)

    useEffect(() => {
        client.get('/users/whoami/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }).then(_ => {
            setCurrentUser(true)
        }).catch(_ => {
            setCurrentUser(false)
        })
    }, [])

    const logoutUser = () => {
        client.get('/users/logout/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }).then(_ => {
            setCurrentUser(false)
        }).catch(_ => {
            setCurrentUser(true)
        })
    }

    return (
        <nav className="border-b-2 border-zinc-500 flex space-x-12 px-10 pb-3">
            <a href="/">
                MIGN Academy
            </a>
            <a href="/articles">
                Articles
            </a>
            {currentUser ? <>
                    <a href="/newarticle">
                        New Article
                    </a>
                    <a href="/quizzes">
                        Quizzes
                    </a>
                    <button onClick={logoutUser}>Logout</button>
                </>
                : <a href="/users/login">Login</a>}
        </nav>
    )
}
