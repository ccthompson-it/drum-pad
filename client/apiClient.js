import request from 'superagent'

const rootUrl = '/api/v1'

export function getBeats () {
  return request.get(rootUrl + '/beats')
    .then(res => {
      return res.body
    })
}