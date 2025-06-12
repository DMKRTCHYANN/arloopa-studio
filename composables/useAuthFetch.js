const useAuthFetch = (url, options = {}) => {
    const token = useCookie('token') // get token from cookies
    const impersonateToken = useCookie('impersonate_token')
    return useFetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: 'Bearer ' + (impersonateToken.value ? impersonateToken.value : token.value),
            Accept: 'application/json',
            Caller: 'user'
        },
        key: (Math.random() + 1).toString(36).substring(7),
        watch: false
    })
}
export default useAuthFetch