
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subclasses').del()
    .then(function () {
      // Inserts seed entries
      return knex('subclasses').insert([
        {
          class_id: 1,
          subclass: "Path of the Berserker"
        },
        {
          class_id: 1,
          subclass: "Path of the Totem Warrior"
        },
        {
          class_id: 1,
          subclass: "Path of the Ancestral Guardian"
        },
        {
          class_id: 1,
          subclass: "Path of the Storm Herald"
        },
        {
          class_id: 1,
          subclass: "Path of the Zealot"
        },
        {
          class_id: 2,
          subclass: "College of Lore"
        },
        {
          class_id: 2,
          subclass: "College of Valor"
        },
        {
          class_id: 2,
          subclass: "College of Glamour"
        },
        {
          class_id: 2,
          subclass: "College of Swords"
        },
        {
          class_id: 2,
          subclass: "College of Whispers"
        },
        {
          class_id: 3,
          subclass: "Knowledge Domain"
        },
        {
          class_id: 3,
          subclass: "Life Domain"
        },
        {
          class_id: 3,
          subclass: "Light Domain"
        },
        {
          class_id: 3,
          subclass: "Nature Domain"
        },
        {
          class_id: 3,
          subclass: "Tempest Domain"
        },
        {
          class_id: 3,
          subclass: "Trickery Domain"
        },
        {
          class_id: 3,
          subclass: "War Domain"
        },
        {
          class_id: 3,
          subclass: "Forge Domain"
        },
        {
          class_id: 3,
          subclass: "Grave Domain"
        },
        {
          class_id: 4,
          subclass: "Circle of the Land"
        },
        {
          class_id: 4,
          subclass: "Circle of the Moon"
        },
        {
          class_id: 4,
          subclass: "Circle of Dreams"
        },
        {
          class_id: 4,
          subclass: "Circle of the Sheperd"
        },
        {
          class_id: 5,
          subclass: "Champion"
        },
        {
          class_id: 5,
          subclass: "Battle Master"
        },
        {
          class_id: 5,
          subclass: "Eldritch Knight"
        },
        {
          class_id: 5,
          subclass: "Arcane Archer"
        },
        {
          class_id: 5,
          subclass: "Cavalier"
        },
        {
          class_id: 5,
          subclass: "Samurai"
        },
        {
          class_id: 6,
          subclass: "Way of the Open Hand"
        },
        {
          class_id: 6,
          subclass: "Way of Shadow"
        },
        {
          class_id: 6,
          subclass: "Way of the Four Elements"
        },
        {
          class_id: 6,
          subclass: "Way of the Drunken Master"
        },
        {
          class_id: 6,
          subclass: "Way of the Kensei"
        },
        {
          class_id: 6,
          subclass: "Way of the Sun Soul"
        },
        {
          class_id: 7,
          subclass: "Oath of Devotion"
        },
        {
          class_id: 7,
          subclass: "Oath of the Ancients"
        },
        {
          class_id: 7,
          subclass: "Oath of Vengeance"
        },
        {
          class_id: 7,
          subclass: "Oath of Conquest"
        },
        {
          class_id: 7,
          subclass: "Oath of Redemption"
        },
        {
          class_id: 8,
          subclass: "Hunter"
        },
        {
          class_id: 8,
          subclass: "Beast Master"
        },
        {
          class_id: 8,
          subclass: "Gloom Stalker"
        },
        {
          class_id: 8,
          subclass: "Horizon Walker"
        },
        {
          class_id: 8,
          subclass: "Monster Slayer"
        },
        {
          class_id: 9,
          subclass: "Thief"
        },
        {
          class_id: 9,
          subclass: "Assassin"
        },
        {
          class_id: 9,
          subclass: "Arcane Trickster"
        },
        {
          class_id: 9,
          subclass: "Inquisitive"
        },
        {
          class_id: 9,
          subclass: "Mastermind"
        },
        {
          class_id: 9,
          subclass: "Scout"
        },
        {
          class_id: 9,
          subclass: "Swashbuckler"
        },
        {
          class_id: 10,
          subclass: "Draconic Bloodline"
        },
        {
          class_id: 10,
          subclass: "Wild Magic"
        },
        {
          class_id: 10,
          subclass: "Divine Soul"
        },
        {
          class_id: 10,
          subclass: "Shadow Magic"
        },
        {
          class_id: 10,
          subclass: "Storm Sorcery"
        },
        {
          class_id: 11,
          subclass: "The Archfey"
        },
        {
          class_id: 11,
          subclass: "The Fiend"
        },
        {
          class_id: 11,
          subclass: "The Great Old One"
        },
        {
          class_id: 11,
          subclass: "The Celestial"
        },
        {
          class_id: 11,
          subclass: "The Hexblade"
        },
        {
          class_id: 12,
          subclass: "School of Abjuration"
        },
        {
          class_id: 12,
          subclass: "School of Conjuration"
        },
        {
          class_id: 12,
          subclass: "School of Divination"
        },
        {
          class_id: 12,
          subclass: "School of Enchantment"
        },
        {
          class_id: 12,
          subclass: "School of Evocation"
        },
        {
          class_id: 12,
          subclass: "School of Illusion"
        },
        {
          class_id: 12,
          subclass: "School of Necromancy"
        },
        {
          class_id: 12,
          subclass: "School of Transmutation"
        },
        {
          class_id: 12,
          subclass: "War Magic"
        }
      ]);
    });
};
