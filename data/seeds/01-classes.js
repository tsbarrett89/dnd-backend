
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
          save_proficiencies: "strength, constitution",
          skill_choice_number: 2,
          skill_choices: "animal handling, athletics, intimidation, nature, perception, survival"
        },
        {
          class: "bard",
          hit_dice: "d8",
          armor_proficiencies: "light armor",
          weapon_proficiencies: "simple weapons, hand crossbows, longswords, rapiers, and shortswords",
          save_proficiencies: "dexterity, charisma",
          skill_choice_number: 3,
          skill_choices: "any"
        },
        {
          class: "cleric",
          hit_dice: "d8",
          armor_proficiencies: "light armor, medium armor, shields",
          weapon_proficiencies: "simple weapons",
          save_proficiencies: "wisdom, charisma",
          skill_choice_number: 2,
          skill_choices: "history, insight, medicine, persuasion, religion"
        },
        {
          class: "druid",
          hit_dice: "d8",
          armor_proficiencies: "light armor, medium armor shields (druids will not wear armor or use shields made of metal",
          weapon_proficiencies: "clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
          save_proficiencies: "intelligence, wisdom",
          skill_choice_number: 2,
          skill_choices: "arcana, animal handling, insight, medicine, nature, perception, religion, survival"
        },
        {
          class: "fighter",
          hit_dice: "d10",
          armor_proficiencies: "all armor, shields",
          weapon_proficiencies: "simple weapons, martial weapons",
          save_proficiencies: "strength, constitution",
          skill_choice_number: 2,
          skill_choices: "acrobatics, animal handling, athletics, history, insight, intimidation, perception, survival"
        },
        {
          class: "monk",
          hit_dice: "d8",
          armor_proficiencies: "none",
          weapon_proficiencies: "simple weapons, shortswords",
          save_proficiencies: "strength, dexterity",
          skill_choice_number: 2,
          skill_choices: "acrobatics, athletics, history, insight, religion, stealth"
        },
        {
          class: "paladin",
          hit_dice: "d10",
          armor_proficiencies: "all armor, shields",
          weapon_proficiencies: "simple weapons, martial weapons",
          save_proficiencies: "wisdom, charisma",
          skill_choice_number: 2,
          skill_choices: "athletics, insight, intimidation, medicine, persuasion, religion"
        },
        {
          class: "ranger",
          hit_dice: "d10",
          armor_proficiencies: "light armor, medium armor, shields",
          weapon_proficiencies: "simple weapons, martial weapons",
          save_proficiencies: "strength, dexterity",
          skill_choice_number: 3,
          skill_choices: "animal handling, athletics, insight, investigation, nature, perception, stealth, survival"
        },
        {
          class: "rogue",
          hit_dice: "d8",
          armor_proficiencies: "light armor",
          weapon_proficiencies: "simple weapons, hand crossbows, longswords, rapiers, shortswords",
          save_proficiencies: "dexterity, intelligence",
          skill_choice_number: 4,
          skill_choices: "acrobatics, athletics, deception, insight, intimidation, investigation, perception, performance, persuasion, sleight of hand, stealth"
        }
      ]);
    });
};
