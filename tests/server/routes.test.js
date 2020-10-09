const request = require('supertest')
const server = require('../../server/server')
const { getBeats, saveBeat, deleteBeat } = require('../../server/db')

jest.mock('../../server/db', () => ({
  getBeats: jest.fn(() => Promise.resolve([{}, {}])),
  saveBeat: jest.fn(() => Promise.resolve()),
  deleteBeat: jest.fn(() => Promise.resolve())
}))

const fakeReq = { beat_name: 'Cool Beat', beat: '[{"sound":"kick","timing":1595732534143},{"sound":"softhat","timing":1595732534583}]' }

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
    })
    .catch(err => expect(err).toBeNull())
})

test('get /beats retrieves all beats', () => {
  expect.assertions(2)
  return request(server)
    .get('/api/v1/beats')
    .expect(200)
    .then((res) => {
      expect(getBeats).toHaveBeenCalled()
      expect(res.body.length).toBe(2)
    })
})

test('post /beats sends the beat to the db function', () => {
  expect.assertions(2)
  return request(server)
    .post('/api/v1/beats')
    .send(fakeReq)
    .expect(200)
    .then((res) => {
      expect(saveBeat).toHaveBeenCalledWith(fakeReq)
      expect(res.body).toBe(true)
    })
})

test('delete /beats/:id sends the id of the beat to the deleteBeat function', () => {
  expect.assertions(2)
  return request(server)
    .delete('/api/v1/beats/2')
    .expect(200)
    .then((res) => {
      expect(deleteBeat).toHaveBeenCalledWith("2")
      expect(res.body).toBe(true)
    })
})