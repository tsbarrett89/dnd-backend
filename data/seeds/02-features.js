
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('features').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('features').insert([
        {
          class_id: 1,
          feature: "Rage",
          level: 1,
          description: "In Battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. <>While raging, you gain the following benefits if you aren't wearing heavy armor. <>- You have advantage on Strength checks and Strength saving throws. <>- When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian table. <>- You have resistance to bludgeoning, piercing, and slashing damage. <>If you are able to cast spells, you can't cast them or concentrate on them while raging. <>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creatures since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. <>Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        },
        {
          class_id: 1,
          feature: "Unarmored Defense",
          level: 1,
          description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
        },
        {
          class_id: 1,
          feature: "Reckless Attack",
          level: 2,
          description: "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
        },
        {
          class_id: 1,
          feature: "Danger Sense",
          level: 2,
          description: "You gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. <>You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
        },
        {
          class_id: 1,
          feature: "Primal Path",
          level: 3,
          description: "You must choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
        }
      ]);
    });
};
