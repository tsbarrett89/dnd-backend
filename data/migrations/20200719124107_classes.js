exports.up = function(knex) {
    return knex.schema.createTable('classes', tbl => {
        tbl.increments();
        tbl.string('class')
            .notNullable()
            .unique()
        tbl.string('hit_dice')
            .notNullable()
        tbl.string('armor_proficiencies')
            .notNullable()
        tbl.string('weapon_proficiencies')
            .notNullable()
        tbl.string('save_proficiencies')
            .notNullable()
        tbl.integer('skill_choice_number')
            .notNullable()
        tbl.text('skill_choices')
            .notNullable()
    })
    .createTable('class_archetypes', tbl => {
        tbl.increments();
        tbl.integer('class_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('archetype')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('class_archetypes')
        .dropTableIfExists('classes')
};
