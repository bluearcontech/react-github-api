import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSaga from '../sagas'

export default (initial_state = {}) => {

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        reducers,
        initial_state,
        applyMiddleware(
            sagaMiddleware
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers') // eslint-disable-line global-require
            store.replaceReducer(nextReducer)
        })
    }

    sagaMiddleware.run(rootSaga)

    return store
}
