
exports.up = function(knex) {
    return knex.schema.createTable('abilities', tbl => {
        tbl.increments()
        tbl.string('ability')
            .unique()
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('abilities')
};
