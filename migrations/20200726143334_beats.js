
exports.up = function(knex) {
  return knex.schema.createTable('beats', (table) => {
    table.increments('id').primary()
    table.string('beat_name')
    table.string('beat', 10000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('beats')
};
