
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
          skill_choices: "animal handling, athletics, intimidation, nature, perception, survival",
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
        },
        {
          class: "cleric",
          hit_dice: "d8",
          armor_proficiencies: "light armor, medium armor, shields",
          weapon_proficiencies: "simple weapons",
          tool_proficiencies: "none",
          save_proficiencies: "wisdom, charisma",
          skill_choice_number: 2,
          skill_choices: "history, insight, medicine, persuasion, religion",
          equipment: "- (a) a mace or (b) a warhammer (if proficient) - (a) scale mail, (b) leather armor, or (c) chain mail (if proficient) - (a) light crossbow and 20 bolts or (b) any simple weapon - (a) priest's pack or (b) an explorer's pack - a shield and a holy symbol"
        },
        {
          class: "druid",
          hit_dice: "d8",
          armor_proficiencies: "light armor, medium armor shields (druids will not wear armor or use shields made of metal",
          weapon_proficiencies: "clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
          tool_proficiencies: "herbalism kit",
          save_proficiencies: "intelligence, wisdom",
          skill_choice_number: 2,
          skill_choices: "arcana, animal handling, insight, medicine, nature, perception, religion, survival",
          equipment: "- (a) a wooden shield or (b) any simple weapon - (a) a scimitar or (b) any simple melee weapon - leather armor, an explorer's pack, and a druidic focus"
        },
        {
          class: "fighter",
          hit_dice: "d10",
          armor_proficiencies: "all armor, shields",
          weapon_proficiencies: "simple weapons, martial weapons",
          tool_proficiencies: "none",
          save_proficiencies: "strength, constitution",
          skill_choice_number: 2,
          skill_choices: "acrobatics, animal handling, athletics, history, insight, intimidation, perception, survival",
          equipment: "- (a) chain mail or (b) leather armor, longbow, and 20 arrows - (a) a martial weapon and a shield or (b) two martial weapons - (a) a light crossbow and 20 bolts or (b) two handaxes - (a) a dungeoneer's pack or (b) an explorer's pack"
        }
      ]);
    });
};
