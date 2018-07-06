import Logger from 'utils/logger'

export default class API {
  static fetch() {
    const headers = {
      'Content-Type': 'application/json',
    }
    API.debug()

    return fetch(API.url, {
      mode: 'cors',
      method: 'get',
      headers,
    })
      .then(response => response.json())
      .then(json => json)
  }

  static debug() {
    Logger.debug('Fetching information: ' + API.url)
  }

  static get url() {
    return `https://44j3n627yk.execute-api.us-east-1.amazonaws.com/prod/dogoaks`
  }
}
