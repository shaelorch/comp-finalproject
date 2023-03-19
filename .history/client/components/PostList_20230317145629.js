import { useEffect } from "react"
import { getPosts } from "../pages/services/posts"

export function PostList() {

    useEffect(() => {
        getPosts().then(setPosts)
    }, [])
    return postMessage.map(post => {
        return (
            <h1 key={post.id}>
                <a href={`/posts/${post.id}`}>{post.title}</a>

            </h1>
        )
    })
}