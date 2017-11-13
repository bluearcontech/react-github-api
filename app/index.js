import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, push } from 'react-router-redux';
import createStore from './store'
import AppContainer from './containers/AppContainer';
import createRoutes from './routes'


const initialState = {};
const store = createStore(initialState);
let routes = createRoutes(store)

ReactDOM.render(
	<AppContainer store={store}>
		{routes}
	</AppContainer>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept('./reducers', () => {
		ReactDOM.render(
			<AppContainer store={store}>
				{routes}
			</AppContainer>,
			document.getElementById('app')
		)
	})
}


