
exports.up = function(knex) {
    return knex.schema.createTable('classes', tbl => {
        tbl.increments();
        tbl.string('class_name')
            .notNullable()
            .unique()
        tbl.string('hit_dice')
            .notNullable()
        tbl.string('armor_proficiencies')
            .notNullable()
        tbl.string('weapon_proficiencies')
            .notNullable()
        tbl.string('tool_proficiencies')
            .notNullable()
        tbl.string('save_proficiencies')
            .notNullable()
        tbl.integer('skill_choice_number')
            .notNullable()
        tbl.text('skill_choices')
            .notNullable()
        tbl.text('equipment')
            .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('classes')
};
