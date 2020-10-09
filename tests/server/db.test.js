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

  test('deleteBeat deletes the specific beat', async () => {
    expect.assertions(2)
    await db.deleteBeat(1, testDb)
    return db.getBeats(testDb)
      .then(beats => {
        expect(beats.length).toBe(1)
        expect(beats[0].id).toBe(2)
      })
  })

  test('saveBeat adds a new beat to the db', async () => {
    expect.assertions(2)
    const fakeBeat = {beat_name: 'Amazing Beat', beat: '[{"sound":"basskick","timing":1595732636364},{"sound":"clap","timing":1595732636792}]'}
    await db.saveBeat(fakeBeat, testDb)
    return db.getBeats(testDb)
      .then(beats => {
        expect(beats.length).toBe(3)
        expect(beats[2].beat_name).toBe('Amazing Beat')
      })
  })
})