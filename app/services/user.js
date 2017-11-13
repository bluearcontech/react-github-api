import { fetchGetUser } from './helpers'

export const getUser = (username) => (
    new Promise((resolve, reject) => {
        fetchGetUser(username).then((response) => {
            if (response.status !== 200) {
                response.json().then((json) => {
                    let message = json.message
                    if (Array.isArray(message)) {
                        message = message.join()
                    }
                    reject(message)
                })
            } else {
                response.json().then((user) => {
                    resolve(user)
                })
            }
        })
    })
)