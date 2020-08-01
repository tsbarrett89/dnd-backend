
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tools').del()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {
          tool: "alchemist's supplies",
          type: "artisan's tools"
        },
        {
          tool: "brewer's supplies",
          type: "artisan's tools"
        },
        {
          tool: "calligrapher's tools",
          type: "artisan's tools"
        },
        {
          tool: "carpenter's tools",
          type: "artisan's tools"
        },
        {
          tool: "cartographer's tools",
          type: "artisan's tools"
        },
        {
          tool: "cobbler's tools",
          type: "artisan's tools"
        },
        {
          tool: "cook's utensils",
          type: "artisan's tools"
        },
        {
          tool: "glassblower's tools",
          type: "artisan's tools"
        },
        {
          tool: "jeweler's tools",
          type: "artisan's tools"
        },
        {
          tool: "leatherworker's tools",
          type: "artisan's tools"
        },
        {
          tool: "mason's tools",
          type: "artisan's tools"
        },
        {
          tool: "painter's tools",
          type: "artisan's tools"
        },
        {
          tool: "potter's tools",
          type: "artisan's tools"
        },
        {
          tool: "smith's tools",
          type: "artisan's tools"
        },
        {
          tool: "tinker's tools",
          type: "artisan's tools"
        },
        {
          tool: "weaver's tools",
          type: "artisan's tools"
        },
        {
          tool: "woodcarver's tools",
          type: "artisan's tools"
        },
        {
          tool: "disguise kit",
          type: "none"
        },
        {
          tool: "forgery kit",
          type: "none"
        },
        {
          tool: "dice set",
          type: "gaming set"
        },
        {
          tool: "dragonchess set",
          type: "gaming set"
        },
        {
          tool: "playing card set",
          type: "gaming set"
        },
        {
          tool: "three-dragon ante set",
          type: "gaming set"
        },
        {
          tool: "herbalism kit",
          type: "none"
        },
        {
          tool: "bagpipes",
          type: "musical instrument"
        },
        {
          tool: "drum",
          type: "musical instrument"
        },
        {
          tool: "dulcimer",
          type: "musical instrument"
        },
        {
          tool: "flute",
          type: "musical instrument"
        },
        {
          tool: "lute",
          type: "musical instrument"
        },
        {
          tool: "lyre",
          type: "musical instrument"
        },
        {
          tool: "horn",
          type: "musical instrument"
        },
        {
          tool: "pan flute",
          type: "musical instrument"
        },
        {
          tool: "shawm",
          type: "musical instrument"
        },
        {
          tool: "viol",
          type: "musical instrument"
        },
        {
          tool: "navigator's tools",
          type: "none"
        },
        {
          tool: "poisoner's kit",
          type: "none"
        },
        {
          tool: "thieve's tools",
          type: "none"
        },
        {
          tool: "Vehicles (land)",
          type: "none"
        },
        {
          tool: "Vehicles (water)",
          type: "none"
        }
      ]);
    });
};
