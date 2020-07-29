
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          class: "barbarian",
          hit_dice: "d12",
          armor_proficiencies: "light armor, medium armor, shields",
          weapon_proficiencies: "simple weapons, martial weapons",
          tool_proficiencies: "none",
          save_proficiencies: "strength, constitution",
          skill_choice_number: 2,
          skill_choices: "Animal Handling, Athletics, Intimidation, Nature, Perception, Survival",
          equipment: "- (a) a greataxe or (b) any martial melee weapon - (a) two handaxes or (b) any simple weapon - An explorer's pack and four javelins"
        },
        {
          class: "bard",
          hit_dice: "d8",
          armor_proficiencies: "light armor",
          weapon_proficiencies: "simple weapons, hand crossbows, longswords, rapiers, and shortswords",
          tool_proficiencies: "Three musical instruments of your choice",
          save_proficiencies: "dexterity, charisma",
          skill_choice_number: 3,
          skill_choices: "any",
          equipment: "- (a) a rapier, (b) a longsword, or (c) any simple weapon - (a) a diplomat's pack or (b) an entertainer's pack - (a) a lute or (b) any other musical instrument - leather armor and a dagger"
        }
      ]);
    });
};
