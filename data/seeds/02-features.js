
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
          description: "In Battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. <> While raging, you gain the following benefits if you aren't wearing heavy armor. <>- You have advantage on Strength checks and Strength saving throws. <>- When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian table. <>- You have resistance to bludgeoning, piercing, and slashing damage. <>If you are able to cast spells, you can't cast them or concentrate on them while raging. <>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creatures since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. <>Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        }
      ]);
    });
};
