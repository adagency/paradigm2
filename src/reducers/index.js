import { combineReducers } from 'redux'
import forms from 'reducers/forms'
import medium from 'reducers/medium'
import nav from 'reducers/nav'
import prismic from 'reducers/prismic'
import { routerReducer as router } from 'react-router-redux'

export default combineReducers({
  forms,
  medium,
  nav,
  prismic,
  router,
})
