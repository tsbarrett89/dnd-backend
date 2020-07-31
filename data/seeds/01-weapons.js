
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weapons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {
          weapon: "club",
          weapon_type: "simple melee",
          cost: "1 sp",
          damage: "1d4",
          damage_type: "bludgeoning",
          weight: "2 lb."
        },
        {
          weapon: "dagger",
          weapon_type: "simple melee",
          cost: "2 gp",
          damage: "1d4",
          damage_type: "piercing",
          weight: "1 lb."
        },
      ]);
    });
};
