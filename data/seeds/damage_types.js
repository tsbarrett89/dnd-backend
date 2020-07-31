
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('damage_types').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('damage_types').insert([
        {
          type: "bludgeoning"
        },
        {
          type: "piercing"
        },
        {
          type: "slashing"
        }
      ]);
    });
};
