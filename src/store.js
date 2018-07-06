import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'

import saga from './saga'
import reducer from './reducers'

export default function configureStore(initialState = {}, history) {
  const middlewares = []
  const sagaMiddleware = createSagaMiddleware()
  const reduxRouterMiddleware = routerMiddleware(history)
  middlewares.push(sagaMiddleware)
  middlewares.push(reduxRouterMiddleware)

  const enhancers = [applyMiddleware(...middlewares)]
  if (typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
  }
  const store = createStore(
    reducer,
    initialState,
    compose(...enhancers),
  )

  sagaMiddleware.run(saga)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
