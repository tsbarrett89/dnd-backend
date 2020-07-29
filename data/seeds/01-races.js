
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
          alignment: "Humans tend toward no particular alignment. The best and the worst are found among them.",
          size: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
          speed: 30,
          darkvision: 0
        },
        {
          race: "dragonborn",
          description: "Born from dragons. They combine the best of dragons and humanoids. Some find themselves faithful servants of true dragons, while others strike out on their own.",
          ability_score_increase: "strength, 2",
          age: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
          alignment: "Dragonborn tend to extremees, making a conscious choice for one side or the other in the cosmic war between good and evil (represendted by Bahumut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villians.",
          size: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium",
          speed: 30,
          darkvision: 0
        },
        {
          race: "gnome",
          description: "Gnomes live in bustling communities full of odd sounds and explosions. They are inventors and tinkers that enjoy exploring and investigating anything, and everything.",
          ability_score_increase: "Intelligence, 2",
          age: "Gnomes mature at the same rate as humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
          alignment: "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
          size: "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small",
          speed: 25,
          darkvision: 60
        },
        {
          race: "half-elf",
          description: "Half-elves combine the best qualities or their human and elf parents. Often they are unable to fit into the society of either humans or elves.",
          ability_score_increase: "Charisma, 2. Choose two, 1",
          age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years",
          alignment: "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
          size: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
          speed: 30,
          darkvision: 60
        },
        {
          race: "half-orc",
          description: "Orc and human tribes sometimes form alliances and these alliances are often sealed with marriages. The offspring of such unions share the best qualities of both their parents.",
          ability_score_increase: "Strength, 2. Constitution, 1",
          age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
          alignment: "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
          size: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
          speed: 30,
          darkvision: 60
        },
        {
          race: "tiefling",
          description: "Demonic ancestry are the curse of the Tiefling. Seen with mistrust and fear by society, they must learn to fend for themselves.",
          ability_score_increase: "Charisma, 2. Intelligence, 1.",
          age: "Tieflings mature at the same rate as humans but live a few years longer.",
          alignment: "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
          size: "Tieflings are about the same size and build as humans. Your size is Medium.",
          speed: 30,
          darkvision: 60
        }
      ]);
    });
};
