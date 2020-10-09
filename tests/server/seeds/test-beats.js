exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('beats').del()
    .then(function () {
      // Inserts seed entries
      return knex('beats').insert([
        {id: 1, beat_name: 'Cool Beat', beat: '[{"sound":"kick","timing":1595732534143},{"sound":"softhat","timing":1595732534583},{"sound":"snare","timing":1595732534796},{"sound":"softhat","timing":1595732535279},{"sound":"kick","timing":1595732535486}]'},
        {id: 2, beat_name: 'Cooler Beat', beat: '[{"sound":"basskick","timing":1595732636364},{"sound":"clap","timing":1595732636792},{"sound":"basskick","timing":1595732637482},{"sound":"clap","timing":1595732637693}]'}
      ]);
    });
};