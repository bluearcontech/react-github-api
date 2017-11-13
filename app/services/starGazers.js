import { fetchGetRepoStarGazers } from './helpers'

export const getRepoStarGazers = (info) => (
    new Promise((resolve, reject) => {
        fetchGetRepoStarGazers(info).then((response) => {
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