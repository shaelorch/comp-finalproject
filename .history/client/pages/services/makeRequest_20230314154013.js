export function makeRequest(url, options) {
    return axios(url, options).then(res => res.data).catch(error => Promise)
}