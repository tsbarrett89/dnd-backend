
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('races').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        {
          race: 'dwarf',
          description: 'Short, stout, and grumpy. They drink a lot of ale, and work a lot of stone.',
          ability_score_increase: "constitution, 2",
          age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
          alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
          size: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is medium.",
          speed: 25,
          darkvision: 60
        },
        {
          race: 'elf',
          description: "Magical and graceful. Elegant artists who enjoy the good things of the world",
          ability_score_increase: "dexterity, 2",
          age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
          alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedoms as well as their own, and they are more often good than not. The drow are an exception, their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
          size: "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
          speed: 30,
          darkvision: 60
        },
        {
          race: "halfling",
          description: "Peace and quiet are the aspirations for most halflings. Few wander out into the wider world, but they still value peace, good food, and a hearth.",
          ability_score_increase: "dexterity, 2",
          age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
          alignment: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
          size: "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small",
          speed: 25,
          darkvision: 0
        },
        {
          race: "human",
          description: "The youngest of the common races. Humans are the innovators, the achievers, and the pioneers of the worlds.",
          ability_score_increase: "all, 1",
          age: "Humans reach adulthood in their late teens and live less than a century.",
          alignment: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
          speed: 30,
          darkvision: 0
        }
      ]);
    });
};
