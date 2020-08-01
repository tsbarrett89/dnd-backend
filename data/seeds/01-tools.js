
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
        }
      ]);
    });
};
