import { fork } from 'redux-saga/effects'
import { watchGetUserRequest } from './user'
import { watchGetUserRepoRequest } from './repositories'
import { watchShowMessageRequest } from './messages'
import { watchGetUserFilterRepoRequest } from './filterRepositories'
import { watchRepoStarGazersRequest } from './starGazers'

export default function* rootSaga() {
    yield [
        fork(watchGetUserRequest),
        fork(watchGetUserRepoRequest),
        fork(watchGetUserFilterRepoRequest),
        fork(watchRepoStarGazersRequest),
        fork(watchShowMessageRequest)
    ]
}
