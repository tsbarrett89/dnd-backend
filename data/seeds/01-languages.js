
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {
          language: "common",
          script: "common"
        },
        {
          language: "dwarvish",
          script: "dwarvish"
        },
        {
          language: "elvish",
          script: "elvish"
        },
        {
          language: "giant",
          script: "dwarvish"
        },
        {
          language: "gnomish",
          script: "dwarvish"
        },
        {
          language: "goblin",
          script: "dwarvish"
        },
        {
          language: "halfling",
          script: "common"
        },
        {
          language: "orc",
          script: "dwarvish"
        },
        {
          language: "abyssal",
          script: "infernal"
        },
        {
          language: "celestial",
          script: "celestial"
        },
        {
          language: "deep speech",
          script: "none"
        },
        {
          language: "draconic",
          script: "draconic"
        },
        {
          language: "infernal",
          script: "infernal"
        },
        {
          language: "primordial",
          script: "dwarvish"
        },
        {
          language: "sylvan",
          script: "elvish"
        },
        {
          language: "undercommon",
          script: "elvish"
        }
      ]);
    });
};
