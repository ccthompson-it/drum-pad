
exports.up = function(knex) {
  return knex.schema.createTable('beats', (table) => {
    table.increments('id').primary()
    table.string('beat_name')
    table.text('beat')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('beats')
};
