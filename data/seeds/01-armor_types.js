
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('armor_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('armor_types').insert([
        {
          type: "light armor"
        },
        {
          type: "medium armor"
        },
        {
          type: "heavy armor"
        },
        {
          type: "shields"
        }
      ]);
    });
};
