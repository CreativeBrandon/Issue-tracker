import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { history, store } from './store/configure-store'
import routes from './routes';
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
