export const CONFIG = {
    MAIN_API_ENDPOINT: 'http://localhost:9000'
}

export const mainAPIHeaderOptions = () => ({
    baseURL: CONFIG.MAIN_API_ENDPOINT,
    headers : {
        'x-token' : localStorage.getItem('token')
    }
})

export const mainAPIOptions = () => ({
    baseURL: CONFIG.MAIN_API_ENDPOINT
})