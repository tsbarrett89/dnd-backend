
exports.up = function(knex) {
    return knex.schema.createTable('character_abilities', tbl => {
        tbl.increments()
        tbl.integer('character_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('characters')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('ability')
            .notNullable()
        tbl.integer('ability_score')
            .unsigned()
            .notNullable()
    })
    .createTable('character_proficiencies', tbl => {
        tbl.increments()
        tbl.integer('character_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('characters')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('proficiency')
            .notNullable()
    })
    .createTable('character_languages', tbl => {
        tbl.increments()
        tbl.integer('character_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('characters')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('language')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('character_languages')
        .dropTableIfExists('character_proficiencies')
        .dropTableIfExists('character_abilities')
};
