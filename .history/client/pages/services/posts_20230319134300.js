import { makeRequest } from "./makeRequest";

export function getPosts() {
    return makeRequest("http://localhost:3001/posts")
}