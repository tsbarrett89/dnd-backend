
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('equipment_packs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('equipment_packs').insert([
        {
          pack: "burglar's pack",
          cost: "16 gp",
          contents: "backpack, ball bearings (1,000), string (10 feet), bell, candle (5), crowbar, hammer, piton (10), hooded lantern, flask of oil (2), days rations (5 days), tinderbox, waterskin, hempen rope (50 feet)"
        },
        {
          pack: "diplomat's pack",
          cost: "39 gp",
          contents: "chest, map or scroll case (2), fine clothes, bottle of ink, ink pen, lamp, flask of oil (2), paper sheet (5), vial or perfume, sealing wax, soap"
        },
        {
          pack: "dungeoneer's pack",
          cost: "12 gp",
          contents: "backpack, crowbar, hammer, piton (10), torch (10), tinderbox, days rations (10), waterskin, hempen rope (50 feet)"
        },
        {
          pack: "entertainer's pack",
          cost: "40 gp",
          contents: "backpack, bedroll, costume (2), candle (5), days rations (5), waterskin, disguise kit"
        },
        {
          pack: "explorer's pack",
          cost: "10gp",
          contents: "backpack, bedroll, mess kit, tinderbox, torch (10), days rations (10), waterskin, hempen rope (50 feet)"
        },
        {
          pack: "priest's pack",
          cost: "19 gp",
          contents: "backpack, blanket, candle (10), tinderbox, alms box, block of incense (2), censer, vestments, days rations (2), waterskin"
        },
        {
          pack: "scholar's pack",
          cost: "40 gp",
          contents: "backpack, book of lore, bottle of ink, ink pen, parchment sheets (10), little bag of sand, small knife"
        }
      ]);
    });
};
