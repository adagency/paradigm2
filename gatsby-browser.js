/* eslint-disable react/prop-types */
import 'babel-polyfill'
import React, { createElement } from 'react'
import { Provider } from 'react-redux'
import PageTransition, { getUserConfirmation } from 'components/PageTransition'
import createStore from './src/store'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

exports.onClientEntry = () => {
  require('gsap')
  require('./src/utils/DrawSVGPlugin')
  require('whatwg-fetch')
  require('scrollmagic')
  require('custom-event-polyfill')
  require('gsap/src/uncompressed/plugins/ScrollToPlugin')
  if (process.env.NODE_ENV === 'development') {
    require('./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
  }
}

exports.replaceRouterComponent = ({ history }) => {
  let initialState
  if (typeof window !== 'undefined') {
    initialState = window['__initial_state__'] || {}
  }
  const store = createStore(initialState, history)

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  )

  return ConnectedRouterWrapper
}

const history = createHistory({ getUserConfirmation })
// block must return a string to conform
history.block((location, action) => location.pathname)
exports.replaceHistory = () => history

// eslint-disable-next-line react/display-name
exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return undefined
  }
  return createElement(PageTransition, { ...props, loader })
}
