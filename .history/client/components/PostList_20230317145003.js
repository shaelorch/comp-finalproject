import { useEffect } from "react"
import { getPosts } from "../pages/services/posts"

export function PostList() {

    useEffect(() => {
        getPosts().then(setPosts)
    }, [])
    return <h1>
        {JSON.stringify(post)}     
        </h1>
}