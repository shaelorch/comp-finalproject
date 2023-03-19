import { useCallback } from "react"

export function useAsync(func, dependencies = []) {
    const { execute, ...state } = useAsyncInternal(func, dependencies, true)

    useEffect(() => {
        execute() 
}, [execute])
}

export function useAsyncFn(func, dependencies = []) {

}

function useAsyncInternal(func, dependencies, initialLoading = false) {
    const [loading, setLoading] = useState(initialLoading)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const execute = useCallback((...params) => {
        setLoading(true)
        return func(...params).then(data => {
            setError(error)
            setValue(undefined)
            return Promise.reject(error)
        }).finally(() => {
            setLoading(false)

        })

    })
}