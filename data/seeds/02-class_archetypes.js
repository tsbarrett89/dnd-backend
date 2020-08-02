
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
        },
        {
          class_id: 4,
          archetype: "Circle of the Land"
        },
        {
          class_id: 4,
          archetype: "Circle of the Moon"
        },
        {
          class_id: 4,
          archetype: "Circle of Dreams"
        },
        {
          class_id: 4,
          archetype: "Circle of the Sheperd"
        },
        {
          class_id: 5,
          archetype: "Champion"
        },
        {
          class_id: 5,
          archetype: "Battle Master"
        },
        {
          class_id: 5,
          archetype: "Eldritch Knight"
        },
        {
          class_id: 5,
          archetype: "Arcane Archer"
        },
        {
          class_id: 5,
          archetype: "Cavalier"
        },
        {
          class_id: 5,
          archetype: "Samurai"
        },
        {
          class_id: 6,
          archetype: "Way of the Open Hand"
        },
        {
          class_id: 6,
          archetype: "Way of Shadow"
        },
        {
          class_id: 6,
          archetype: "Way of the Four Elements"
        },
        {
          class_id: 6,
          archetype: "Way of the Drunken Master"
        },
        {
          class_id: 6,
          archetype: "Way of the Kensei"
        },
        {
          class_id: 6,
          archetype: "Way of the Sun Soul"
        },
        {
          class_id: 7,
          archetype: "Oath of Devotion"
        },
        {
          class_id: 7,
          archetype: "Oath of the Ancients"
        },
        {
          class_id: 7,
          archetype: "Oath of Vengeance"
        },
        {
          class_id: 7,
          archetype: "Oath of Conquest"
        },
        {
          class_id: 7,
          archetype: "Oath of Redemption"
        },
        {
          class_id: 8,
          archetype: "Hunter"
        },
        {
          class_id: 8,
          archetype: "Beast Master"
        },
        {
          class_id: 8,
          archetype: "Gloom Stalker"
        },
        {
          class_id: 8,
          archetype: "Horizon Walker"
        },
        {
          class_id: 8,
          archetype: "Monster Slayer"
        },
        {
          class_id: 9,
          archetype: "Thief"
        },
        {
          class_id: 9,
          archetype: "Assassin"
        },
        {
          class_id: 9,
          archetype: "Arcane Trickster"
        },
        {
          class_id: 9,
          archetype: "Inquisitive"
        },
        {
          class_id: 9,
          archetype: "Mastermind"
        },
        {
          class_id: 9,
          archetype: "Scout"
        },
        {
          class_id: 9,
          archetype: "Swashbuckler"
        },
        {
          class_id: 10,
          archetype: "Draconic Bloodline"
        },
        {
          class_id: 10,
          archetype: "Wild Magic"
        },
        {
          class_id: 10,
          archetype: "Divine Soul"
        },
        {
          class_id: 10,
          archetype: "Shadow Magic"
        },
        {
          class_id: 10,
          archetype: "Storm Sorcery"
        },
        {
          class_id: 11,
          archetype: "The Archfey"
        },
        {
          class_id: 11,
          archetype: "The Fiend"
        },
        {
          class_id: 11,
          archetype: "The Great Old One"
        },
        {
          class_id: 11,
          archetype: "The Celestial"
        },
        {
          class_id: 11,
          archetype: "The Hexblade"
        },
        {
          class_id: 12,
          archetype: "School of Abjuration"
        },
        {
          class_id: 12,
          archetype: "School of Conjuration"
        },
        {
          class_id: 12,
          archetype: "School of Divination"
        },
        {
          class_id: 12,
          archetype: "School of Enchantment"
        },
        {
          class_id: 12,
          archetype: "School of Evocation"
        },
        {
          class_id: 12,
          archetype: "School of Illusion"
        },
        {
          class_id: 12,
          archetype: "School of Necromancy"
        },
        {
          class_id: 12,
          archetype: "School of Transmutation"
        },
        {
          class_id: 12,
          archetype: "War Magic"
        }
      ]);
    });
};
