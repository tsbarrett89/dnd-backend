
exports.up = function(knex) {
    return knex.schema.createTable('skills', tbl => {
        tbl.increments()
        tbl.string('skill')
            .notNullable()
            .unique()
        tbl.string('ability_modifier')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('skills')
};
