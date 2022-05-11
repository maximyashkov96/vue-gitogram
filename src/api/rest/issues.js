import { makeRequest } from '../requests'

export const getIssues = ({ owner, repo }) => {
    const params = new URLSearchParams()
    params.append('per_page', 10)

    return makeRequest({
        url: `/repos/${owner}/${repo}/issues`,
        headers: {
            accept: 'application/vnd.github.v3+json'
        }
    })
}
