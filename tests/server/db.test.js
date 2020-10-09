const db = require('../../server/db')
const config = require('../../knexfile').test
const testDb = require('knex')(config)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('Beat db', () => {
  test('getBeats gets all beats', () => {
    expect.assertions(1)
    return db.getBeats(testDb)
      .then(beats => {
        expect(beats.length).toBe(2)
      })
  })
})