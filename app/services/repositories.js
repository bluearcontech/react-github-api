import { fetchGetUserRepositories } from './helpers'

export const getRepositories = (username) => (
    new Promise((resolve, reject) => {
        fetchGetUserRepositories(username).then((response) => {
            if (response.status !== 200) {
                response.json().then((json) => {
                    let message = json.message
                    if (Array.isArray(message)) {
                        message = message.join()
                    }
                    reject(message)
                })
            } else {
                response.json().then((data) => {
                    resolve(data)
                })
            }
        })
    })
)