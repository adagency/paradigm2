import { createReducer, createTypes } from 'reduxsauce'

export const Types = createTypes(`
    INIT
    FETCH
    FETCHED
  `, { prefix: '@@app/medium/' })

export const fetch = () => ({ type: Types.FETCH })
export const fetched = (data) => ({ type: Types.FETCHED, data })
const INITIAL_STATE = {
  fetching: false,
  data: null,
  error: null,
}

class ACTION_HANDLERS {
  static [Types.INIT](state = INITIAL_STATE, action) {
    return { ...state }
  }

  static [Types.FETCH](state, action) {
    const fetching = true
    return { ...state, fetching }
  }

  static [Types.FETCHED](state, action) {
    const fetching = false
    const { data } = action
    let error
    if (data.statusCode !== 200 && !data.body && !data.body.items) {
      error = 'There was a problem fetching the blog posts.'
    } else {
      error = null
    }
    return { ...state, fetching, data: data.body, error }
  }
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
