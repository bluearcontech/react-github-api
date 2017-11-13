import 'whatwg-fetch'

export const fetchGetUser = username => {
    return fetch(`https://api.github.com/users/${username}`, {
        credentials: 'same-origin',
    })
}

export const fetchGetUserRepositories = username => (
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        credentials: 'same-origin',
    })
)

export const fetchGetRepoStarGazers = info => {
    return fetch(`https://api.github.com/repos/${info}/stargazers`, {
        credentials: 'same-origin',
    })
}

