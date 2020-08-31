import request from 'superagent'

const rootUrl = '/api/v1'

export function getBeats() {
  return request.get(rootUrl + '/beats')
    .then(res => {
      return res.body
    })
}

export function saveBeat(beat) {
  console.log(beat)
  return request.post(rootUrl + '/beats', {beat: JSON.stringify(beat), beat_name: 'Custom Beat'})
    .then(res => {
      return res.body
    })
}

export function deleteBeat() {
  return request.delete(rootUrl + '/beats')
    .then(res => {
      return res.body
    })
}