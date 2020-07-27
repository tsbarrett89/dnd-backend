
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
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('character_abilities')
};