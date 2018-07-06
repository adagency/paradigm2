import API from './api'
import * as Actions from './'
import { put, call, takeEvery } from 'redux-saga/effects'
import Logger from 'utils/logger'

function * fetchMedium(action) {
  console.log('Saga Fetch')
  try {
    const data = yield call(API.fetch)
    yield put(Actions.fetched(data))
  } catch (error) {
    Logger.error(error)
  }
}

export default function * watch() {
  yield takeEvery(Actions.Types.FETCH, fetchMedium)
}
