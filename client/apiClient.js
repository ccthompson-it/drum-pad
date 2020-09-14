import request from 'superagent'

const rootUrl = '/api/v1'

export function getBeats() {
  return request.get(rootUrl + '/beats')
    .then(res => {
      return res.body
    })
}

export function saveBeat(beat, beatName) {
  return request.post(rootUrl + '/beats', {beat: JSON.stringify(beat), beat_name: beatName})
    .then(res => {
      return res.body
    })
}

export function deleteBeat(id) {
  return request.delete(rootUrl + '/beats/' + id)
    .then(res => {
      return res.body
    })
}