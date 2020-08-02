
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_archetypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_archetypes').insert([
        {
          class_id: 1,
          archetype: "Path of the Berserker"
        },
        {
          class_id: 1,
          archetype: "Path of the Totem Warrior"
        },
        {
          class_id: 1,
          archetype: "Path of the Ancestral Guardian"
        },
        {
          class_id: 1,
          archetype: "Path of the Storm Herald"
        },
        {
          class_id: 1,
          archetype: "Path of the Zealot"
        },
        {
          class_id: 2,
          archetype: "College of Lore"
        },
        {
          class_id: 2,
          archetype: "College of Valor"
        },
        {
          class_id: 2,
          archetype: "College of Glamour"
        },
        {
          class_id: 2,
          archetype: "College of Swords"
        },
        {
          class_id: 2,
          archetype: "College of Whispers"
        },
        {
          class_id: 3,
          archetype: "Knowledge Domain"
        },
        {
          class_id: 3,
          archetype: "Life Domain"
        },
        {
          class_id: 3,
          archetype: "Light Domain"
        },
        {
          class_id: 3,
          archetype: "Nature Domain"
        },
        {
          class_id: 3,
          archetype: "Tempest Domain"
        },
        {
          class_id: 3,
          archetype: "Trickery Domain"
        },
        {
          class_id: 3,
          archetype: "War Domain"
        },
        {
          class_id: 3,
          archetype: "Forge Domain"
        },
        {
          class_id: 3,
          archetype: "Grave Domain"
        }
      ]);
    });
};
