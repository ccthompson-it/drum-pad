import request from 'superagent'

const rootUrl = '/api/v1'

export function getQuotes () {
  return request.get(rootUrl + '/quotes')
    .then(res => {
      return res.body
    })
}

export function getQuestions () {
  return request.get(rootUrl + '/ollie')
  .then(res => {
    return res.body
  })
}

export function getQuotesByName (name) {
  return request.get(rootUrl + `/quotes/${name}`).catch(e => console.log(e))
}

export function getVideos () {
  return request.get(rootUrl + '/jv')
  .then(res => {
    return res.body
  })
}