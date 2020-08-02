
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gear').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('gear').insert([
        {
          name: "abacus",
          cost: "2 gp",
          weight: "2 lb.",
          description: "none"
        },
        {
          name: "acid vial",
          cost: "25 gp",
          weight: "1 lb.",
          description: "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage."
        },
        {
          name: "flask of alchemist's fire",
          cost: "50 gp",
          weight: "1 lb.",
          description: "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
        },
        {
          name: "arrows (20)",
          type: "ammunition",
          cost: "1 gp",
          weight: "1 lb.",
          description: "none"
        },
        {
          name: "blowgun needles (50)",
          type: "ammunition",
          cost: "1 gp",
          weight: "1 lb.",
          description: "none"
        },
        {
          name: "crossbow bolts (20)",
          type: "ammunition",
          cost: "1 gp",
          weight: "1.5 lb.",
          description: "none"
        },
        {
          name: "sling bullets (20)",
          type: "ammunition",
          cost: "4 cp",
          weight: "1.5 lb.",
          description: "none"
        },
        {
          name: "antitoxin vial",
          cost: "50 gp",
          weight: "none",
          description: "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
        },
        {
          name: "crystal",
          type: "arcane focus",
          cost: "10 gp",
          weight: "1 lb.",
          description: "none"
        },
        {
          name: "orb",
          type: "arcane focus",
          cost: "20 gp",
          weight: "3 lb.",
          description: "none"
        },
        {
          name: "rod",
          type: "arcane focus",
          cost: "10 gp",
          weight: "2 lb.",
          description: "none"
        },
        {
          name: "staff",
          type: "arcane focus",
          cost: "5 gp",
          weight: "4 lb.",
          description: "none"
        },
        {
          name: "wand",
          type: "arcane focus",
          cost: "10 gp",
          weight: "1 lb.",
          description: "none"
        },
        {
          name: "backpack",
          cost: "2 gp",
          weight: "5 lb.",
          description: "none"
        },
        {
          name: "ball bearings (bag of 1,000)",
          cost: "1 gp",
          weight: "2 lb.",
          description: "As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the save."
        },
        {
          name: "barrel",
          cost: "2 gp",
          weight: "70 lb.",
          description: "none"
        },
        {
          name: "basket",
          cost: "4 sp",
          weight: "2 lb.",
          description: "none"
        },
        {
          name: "bedroll",
          cost: "1 gp",
          weight: "7 lb.",
          description: "none"
        },
        {
          name: "bell",
          cost: "1 gp",
          weight: "none",
          description: "none"
        },
        {
          name: "blanket",
          cost: "5 sp",
          weight: "3 lb.",
          description: "none"
        },
        {
          name: "block and tackle",
          cost: "1 gp",
          weight: "5 lb.",
          description: "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle  allows you to hoist up to four times the weight you can normally lift."
        },
        {
          name: "book",
          cost: "25 gp",
          weight: "5 lb.",
          description: "A book might contain poetry, historical accounts, information pertaining to a particular field or lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook."
        },
        {
          name: "glass bottle",
          cost: "2 gp",
          weight: "2 lb.",
          description: "none"
        },
        {
          name: "bucket",
          cost: "5 cp",
          weight: "2 lb.",
          description: "none"
        },
        {
          name: "caltrops (bag of 20)",
          cost: "1 gp",
          weight: "2 lb.",
          description: "As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succed on a DC 15 dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature's walking speed by 10 feet until the creature regainst at least 1 hit point. A creature moving through the area at half speed doesn't need to to make the save."
        }
      ]);
    });
};
