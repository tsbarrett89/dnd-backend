
exports.up = function(knex) {
    return knex.schema.createTable('skills', tbl => {
        tbl.increments()
        tbl.string('skill')
            .notNullable()
            .unique()
        tbl.integer('ability_modifier_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('abilities')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('skills')
};
