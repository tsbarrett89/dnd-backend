
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
          equipment: "A crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gp."
        },
        {
          background: "entertainer",
          skill_proficiencies: "acrobatics, performance",
          tool_proficiencies: "disguise kit, one type of musical instrument",
          languages: "none",
          equipment: "A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15 gp."
        },
        {
          background: "folk hero",
          skill_proficiencies: "animal handling, survival",
          tool_proficiencies: "One type of artisan's tools, vehicles (land)",
          languages: "none",
          equipment: "A set of artisan's tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gp."
        },
        {
          background: "guild artisan",
          skill_proficiencies: "insight, persuasion",
          tool_proficiencies: "One type of artisan's tools",
          languages: "One of your choice",
          equipment: "A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothes, and a pouch containing 15 gp."
        },
        {
          background: "hermit",
          skill_proficiencies: "medicine, religion",
          tool_proficiencies: "herbalism kit",
          languages: "One of your choice",
          equipment: "A scroll case stuffed full of notes from your studies or prayers, a winter "
        },
        {
          background: "noble",
          skill_proficiencies: "history, persuasion",
          tool_proficiencies: "One type of gaming set",
          languages: "One of your choice",
          equipment: "A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp."
        },
        {
          background: "outlander",
          skill_proficiencies: "athletics, survival",
          tool_proficiencies: "One type of musical instrument",
          languages: "One of your choice",
          equipment: "A staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, and a pouch containing 10 gp."
        },
        {
          background: "sage",
          skill_proficiencies: "arcana, history",
          tool_proficiencies: "none",
          languages: "Two of your choice",
          equipment: "A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and a pouch containing 10 gp."
        },
        {
          background: "sailor",
          skill_proficiencies: "athletics, perception",
          tool_proficiencies: "Navigator's tools, vehicles (water)",
          languages: "none",
          equipment: "A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table"
        },
        {
          background: "soldier",
          skill_proficiencies: "athletics, intimidation",
          tool_proficiencies: "One type of gaming set, vehicles (land)",
          languages: "none",
          equipment: "An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or deck of cards, a set of common clothes, and a pouch containing 10 gp."
        },
        {
          background: "urchin",
          skill_proficiencies: "sleight of hand, stealth",
          tool_proficiencies: "disguise kit, thieves' tools",
          languages: "none",
          equipment: "A small knife, a map of the city you grew up in,"
        }
      ]);
    });
};
