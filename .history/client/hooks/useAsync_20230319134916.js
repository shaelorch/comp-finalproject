export function useAsync(func, dependencies = []) {

}

export function useAsyncFn(func, dependencies = []) {

}

function useAsyncInternal(func, dependencies, initialLoading = false) {
    const [loading, setLoading] = useState(initialLoading)
    const [error, setError] = useState()
    const [value, setValue] = useState()
}