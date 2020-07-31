
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weapon_types').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('weapon_types').insert([
        {
          type: "Simple Melee Weapons"
        },
        {
          type: "Simple Ranged Weapons"
        },
        {
          type: "Martial Melee Weapons"
        },
        {
          type: "Martial Ranged Weapons"
        }
      ]);
    });
};
