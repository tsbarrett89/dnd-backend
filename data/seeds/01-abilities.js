
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('abilities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('abilities').insert([
        {
          ability: "strength"
        },
        {
          ability: "dexterity"
        },
        {
          ability: "constitution"
        },
        {
          ability: "intelligence"
        },
        {
          ability: "wisdom"
        },
        {
          ability: "charisma"
        }
      ]);
    });
};
