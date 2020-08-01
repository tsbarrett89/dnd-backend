
exports.up = function(knex) {
    return knex.schema.createTable('tools', tbl => {
        tbl.increments()
        tbl.string('tool')
            .unique()
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tools')
};
