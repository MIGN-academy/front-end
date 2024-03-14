import {useStore} from "@nanostores/react";
import {$user, addUser, $client} from "@/lib/stores.ts";
import {useEffect, useState} from "react";

export const MyProfile = () => {
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

    if(currentUser){
        // href=`/articles/${article.article_id}`
        return (
            <div>
                <h2>{user.email}'s Articles</h2>
                {articles.map(article => (
                    <div key={article['article_id']} className="search-result">
                        <a href={`/articles/${article['article_id']}`}>
                            <p>{article['title']}</p>
                        </a>
                    </div>
                ))}
            </div>
        )
    } else {
        return <div>This profile does not exist</div>
    }

}