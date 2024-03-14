import {useStore} from "@nanostores/react";
import {$client} from "@/lib/stores.ts";
import {useEffect, useState} from "react";

export const SidebarMenu = () => {
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

    if (currentUser) {
        return (
            <div className='flex flex-col space-y-12 py-10 px-10'>
                <div>
                    <a href='/profile'>My Profile</a>
                </div>
                <div>
                    <a href='/myarticles'>My Articles</a>
                </div>
            </div>
        )
    }
}