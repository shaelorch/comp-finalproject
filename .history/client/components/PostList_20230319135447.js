import { useEffect, useState } from "react"
import { getPosts } from "../pages/services/posts"


export function PostList() {
    const {loading, error, value: posts} = useAsync(getPosts)

    if(loading) return <h1>Loading</h1>
    if (error) return <h1>"error-msg"</h1>

    useEffect(() => {
        getPosts().then(setPosts)
    }, [])
    return posts.map(post => {
        return (
            <h1 key={post.id}>
                <a href={`/posts/${post.id}`}>{post.title}</a>
            </h1>
        )
    })
}