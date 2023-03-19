export function PostList() {

    useEffect(() => {
        getPosts().then(setPosts)
    }, [])
    return <h1>
        {JSON.stringify(posts)}     
        </h1>
}