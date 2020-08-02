
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
        },
        {
          name: "candle",
          cost: "1 cp",
          weight: "none",
          description: "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 15 feet."
        },
        {
          name: "crossbow bolt case",
          cost: "1 gp",
          weight: "1 lb.",
          description: "This wooden case can hold up to tweny crossbow bolts."
        },
        {
          name: "map or scroll case",
          cost: "1 gp",
          weight: "1 lb.",
          description: "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment."
        },
        {
          name: "chain (10 feet)",
          cost: "5 gp",
          weight: "25 lb.",
          description: "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check."
        },
        {
          name: "chalk",
          cost: "1 cp",
          weight: "none",
          description: "none"
        },
        {
          name: "chest",
          cost: "5 gp",
          weight: "25 lb.",
          description: "none"
        },
        {
          name: "climber's kit",
          cost: "25 gp",
          weight: "12 lb.",
          description: "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
        },
        {
          name: "common clothes",
          cost: "5 sp",
          weight: "3 lb.",
          description: "none"
        },
        {
          name: "costume",
          cost: "5 gp",
          weight: "4 lb.",
          description: "none"
        },
        {
          name: "fine clothes",
          cost: "15 gp",
          weight: "6 lb.",
          description: "none"
        },
        {
          name: "traveler's clothes",
          cost: "2 gp",
          weight: "4 lb.",
          description: "none"
        },
        {
          name: "component pouch",
          cost: "25 gp",
          weight: "2 lb.",
          description: "A component pouch is a small, watertight leather belt puch taht has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description)."
        },
        {
          name: "crowbar",
          cost: "2 gp",
          weight: "5 lb.",
          description: "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
        },
        {
          name: "sprig of mistletoe",
          type: "druidic focus",
          cost: "1 gp",
          weight: "none",
          description: "A druid can use such an object as a spellcasting focus."
        },
        {
          name: "totem",
          type: "druidic focus",
          cost: "1 gp",
          weight: "none",
          description: "A druid can use such an object as a spellcasting focus."
        },
        {
          name: "wooden staff",
          type: "druidic focus",
          cost: "5 gp",
          weight: "4 lb.",
          description: "A druid can use such an object as a spellcasting focus."
        },
        {
          name: "yew wand",
          type: "druidic focus",
          cost: "10 gp",
          weight: "1 lb.",
          description: "A druid can use such an object as a spellcasting focus."
        },
        {
          name: "fishing tackle",
          cost: "1 gp",
          weight: "4 lb.",
          description: "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
        },
        {
          name: "flask",
          cost: "2 cp",
          weight: "1 lb.",
          description: "none"
        },
        {
          name: "tankard",
          cost: "2 cp",
          weight: "1 lb.",
          description: "none"
        },
        {
          name: "grappling hook",
          cost: "2 gp",
          weight: "4 lb.",
          description: "none"
        },
        {
          name: "hammer",
          cost: "1 gp",
          weight: "3 lb.",
          description: "none"
        },
        {
          name: "sledge hammer",
          cost: "2 gp",
          weight: "10 lb.",
          description: "none"
        },
        {
          name: "healer's kit",
          cost: "5 gp",
          weight: "3 lb.",
          description: "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."
        },
        {
          name: "amulet",
          type: "holy symbol",
          cost: "5 gp",
          weight: "1 lb.",
          description: "A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
        },
        {
          name: "emblem",
          type: "holy symbol",
          cost: "5 gp",
          weight: "none",
          description: "A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
        },
        {
          name: "reliquary",
          type: "holy symbol",
          cost: "5 gp",
          weight: "2 lb.",
          description: "A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
        },
        {
          name: "holy water (flask)",
          cost: "25 gp",
          weight: "2 lb.",
          description: "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage. A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot."
        },
        {
          name: "hourglass",
          cost: "25 gp",
          weight: "1 lb.",
          description: "none"
        },
        {
          name: "hunting trap",
          cost: "5 gp",
          weight: "25 lb.",
          description: "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movementis limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
        },
        {
          name: "ink",
          cost: "10 gp",
          weight: "none",
          description: "none"
        },
        {
          name: "ink pen",
          cost: "2 cp",
          weight: "none",
          description: "none"
        },
        {
          name: "jug",
          cost: "2 cp",
          weight: "4 lb.",
          description: "none"
        },
        {
          name: "pitcher",
          cost: "2 cp",
          weight: "4 lb.",
          description: "none"
        },
        {
          name: "ladder (10-foot)",
          cost: "1 sp",
          weight: "25 lb.",
          description: "none"
        },
        {
          name: "lamp",
          cost: "5 sp",
          weight: "1 lb.",
          description: "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask of oil."
        },
        {
          name: "bullseye lantern",
          cost: "10 gp",
          weight: "2 lb.",
          description: "A bullseye lantern cast bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask of oil."
        },
        {
          name: "hooded lantern",
          cost: "5 gp",
          weight: "2 lb.",
          description: "A hooded lantern casts a bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
        },
        {
          name: "lock",
          cost: "10 gp",
          weight: "1 lb.",
          description: "A key is provided with the lock. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide taht better locks are available for higher prices."
        },
        {
          name: "magnifying glass",
          cost: "100 gp",
          weight: "none",
          description: "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."
        },
        {
          name: "manacles",
          cost: "2 gp",
          weight: "6 lb.",
          description: "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles lock with a successful DC 15 Dexterity check. Manacles have 15 hit points."
        },
        {
          name: "mess kit",
          cost: "2 sp",
          weight: "1 lb.",
          description: "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
        },
        {
          name: "steel mirror",
          cost: "5 gp",
          weight: ".5 lb.",
          description: "none"
        },
        {
          name: "flask of oil",
          cost: "1 sp",
          weight: "1 lb.",
          description: "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area. provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends it turn in the area. A creature can take this damage only once per turn."
        },
        {
          name: "paper sheet",
          cost: "2 sp",
          weight: "none",
          description: "none"
        },
        {
          name: "parchment sheet",
          cost: "1 sp",
          weight: "none",
          description: "none"
        },
        {
          name: "vial of perfume",
          cost: "5 gp",
          weight: "none",
          description: "none"
        },
        {
          name: "miner's pick",
          cost: "2 gp",
          weight: "10 lb.",
          description: "none"
        },
        {
          name: "piton",
          cost: "5 cp",
          weight: ".25 lb.",
          description: "none"
        },
        {
          name: "vial of basic poison",
          cost: "100 gp",
          weight: "none",
          description: "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must take a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying."
        },
        {
          name: "pole (10-foot)",
          cost: "5 cp",
          weight: "7 lb.",
          description: "none"
        },
        {
          name: "iron pot",
          cost: "2 gp",
          weight: "10 lb.",
          description: "none"
        },
        {
          name: "potion of healing",
          cost: "50 gp",
          weight: ".5 lb.",
          description: "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action."
        },
        {
          name: "pouch",
          cost: "5 sp",
          weight: "1 lb.",
          description: "A cloth or leather puch can hold up to 20 sling bullets or 50 blowgun needles, among other things."
        },
        {
          name: "quiver",
          cost: "1 gp",
          weight: "1 lb.",
          description: "A quiver can hold up to 20 arrows."
        },
        {
          name: "portable ram",
          cost: "4 gp",
          weight: "35 lb.",
          description: "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
        },
        {
          name: "days rations",
          cost: "5 sp",
          weight: "2 lb.",
          description: "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
        },
        {
          name: "robes",
          cost: "1 gp",
          weight: "4 lb.",
          description: "none"
        },
        {
          name: "hempen rope (50 feet)",
          cost: "1 gp",
          weight: "10 lb.",
          description: "Rope has 2 hit points and can be burst with a DC 17 Strength check."
        },
        {
          name: "silk rope (50 feet)",
          cost: "10 gp",
          weight: "5 lb.",
          description: "Rope has 2 hit points and can be burst with a DC 17 Strength check."
        },
        {
          name: "sack",
          cost: "1 cp",
          weight: ".5 lb.",
          description: "none"
        },
        {
          name: "merchant's scale",
          cost: "5 gp",
          weight: "3 lb.",
          description: "A scale includes a small balance, pans, and asuitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
        },
        {
          name: "sealing wax",
          cost: "5 sp",
          weight: "none",
          description: "none"
        },
        {
          name: "shovel",
          cost: "2 gp",
          weight: "5 lb.",
          description: "none"
        },
        {
          name: "signal whistle",
          cost: "5 cp",
          weight: "none",
          description: "none"
        },
        {
          name: "signet ring",
          cost: "5 gp",
          weight: "none",
          description: "none"
        },
        {
          name: "soap",
          cost: "2 cp",
          weight: "none",
          description: "none"
        },
        {
          name: "spellbook",
          cost: "50 gp",
          weight: "3 lb.",
          description: "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
        },
        {
          name: "iron spikes (10)",
          cost: "1 gp",
          weight: "5 lb.",
          description: "none"
        },
        {
          name: "spyglass",
          cost: "1,000 gp",
          weight: "1 lb.",
          description: "Objects viewed through a spyglass are magnified to twice their size."
        },
        {
          name: "tent",
          cost: "2 gp",
          weight: "20 lb.",
          description: "A simple and portable canvas shelter, a tent sleeps two."
        },
        {
          name: "tinderbox",
          cost: "5 sp",
          weight: "1 lb.",
          description: "This small container holds dlint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch - or anything else with abundant, exposed fuel - takes an action. Lighting any other fire takes 1 minute."
        },
        {
          name: "torch",
          cost: "1 cp",
          weight: "1 lb.",
          description: "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
        },
        {
          name: "vial",
          cost: "1 gp",
          weight: "none",
          description: "none"
        },
        {
          name: "waterskin",
          cost: "2 sp",
          weight: "5 lb.",
          description: "none"
        },
        {
          name: "whetstone",
          cost: "1 cp",
          weight: "1 lb.",
          description: "none"
        }
      ]);
    });
};
