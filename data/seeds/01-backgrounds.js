
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('backgrounds').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('backgrounds').insert([
        {
          background: "acolyte",
          skill_proficiencies: "insight, religion",
          tool_proficiencies: "none",
          languages: "Two of your choice",
          equipment: "A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp."
        },
        {
          background: "charlatan",
          skill_proficiencies: "deception, sleight of hand",
          tool_proficiencies: "disguise kit, forgery kit",
          languages: "none",
          equipment: "A set of fine clothes, a disguise kit, tools of the con or your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a pouch containing 15gp."
        },
        {
          background: "criminal",
          skill_proficiencies: "deception, stealth",
          tool_proficiencies: "One type of gaming set, thieves' tools",
          languages: "none",
          equipment: "A crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gp"
        }
      ]);
    });
};
