
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weapon_properties').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('weapon_properties').insert([
        {
          property: "ammunition",
          description: "You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon. A sling must be loaded to deal any damage when used in this way"
        },
        {
          property: "finesse",
          description: "When making an attack with a finesse weapon, you use your choice of Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls"
        },
        {
          property: "heavy",
          description: "Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Small creature to use effectively."
        },
        {
          property: "light",
          description: "A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons."
        },
        {
          property: "loading",
          description: "Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make."
        },
        {
          property: "range",
          description: "A weapon that can be used to make a ranged attack has a range in parantheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon's normal range in feet, and the second indicates the weapon's long range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can't attack a target beyond the weapon's long range."
        },
        {
          property: "reach",
          description: "This weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for opportunity attacks with it."
        },
        {
          property: "special (lance)",
          description: "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted"
        },
        {
          property: "special (net)",
          description: "A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardles of the number of attacks you can normally make."
        },
        {
          property: "thrown",
          description: "If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use your Strength or your Dexterity, since the dagger has the finesse property."
        },
        {
          property: "two-handed",
          description: "This weapon requires two hands when you attack with it."
        },
        {
          property: "versatile",
          description: "This weapon can be used with one or two hands. A damage value in parantheses appears with the property - the damage when the weapon is used with two hands to make a melee attack."
        }
      ]);
    });
};
