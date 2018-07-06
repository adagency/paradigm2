import { fork } from 'redux-saga/effects'
import forms from 'reducers/forms/saga'
import prismic from 'reducers/prismic/saga'
import medium from 'reducers/medium/saga'

export default function * root() {
  yield fork(forms)
  yield fork(prismic)
  yield fork(medium)
}
