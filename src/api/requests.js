import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

export const makeRequest = ({
    url, method = 'get', data = {}, headers = {}
}) => axios({
    url,
    method,
    data,
    headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
        ...headers
    }
})
