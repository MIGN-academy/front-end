import {useStore} from "@nanostores/react";
import {$user, addUser, $client} from "@/lib/stores.ts";
import {useEffect, useState} from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button.tsx";

export const MyArticles = () => {
    const client = useStore($client)
    const user = useStore($user)
    const [currentUser, setCurrentUser] = useState(false)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        client.get('/users/whoami/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setCurrentUser(true)
            if (user.email === 'anonymous') {
                addUser({email: res.data['email'], user_id: res.data['user_id']})
            }
            client.get(`/articles/?author=${user.user_id}`).then(res => {
                setArticles(res.data)
            })
        }).catch(_ => {
            setCurrentUser(false)
        })
    }, [])

    if (currentUser) {
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/2">Title</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {articles.map(article => (
                            <TableRow key={article['article_id']} className="font-medium">
                                <TableCell className='font-medium'>
                                    <a href={`/articles/${article['article_id']}`}>
                                        {article['title']}
                                    </a>
                                </TableCell>
                                <TableCell className='float-right space-x-4'>
                                    <Button variant='outline'>
                                        Edit
                                    </Button>
                                    <Button variant='destructive' onClick={() => {
                                        client.delete(`/articles/delete/${article['article_id']}/`, {
                                            headers: {
                                                'Authorization': `Token ${localStorage.getItem('token')}`
                                            }
                                        }).then(_ => {
                                            console.log('Article successfully deleted')
                                        }).catch(err => {
                                            console.log(err)
                                        })
                                    }}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    } else {
        return <div>This profile does not exist</div>
    }

}