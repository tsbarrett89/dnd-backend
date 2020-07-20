
exports.up = function(knex) {
    return knex.schema.createTable('backgrounds', tbl => {
        tbl.increments()
        tbl.string('background')
            .notNullable()
            .unique()
        tbl.string('skill_proficiencies')
            .notNullable()
        tbl.string('tool_proficiencies')
            .notNullable()
        tbl.string('languages')
            .notNullable()
        tbl.text('equipment')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('backgrounds')
};
