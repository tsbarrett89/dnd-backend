
exports.up = function(knex) {
    return knex.schema.createTable('tools', tbl => {
        tbl.increments()
        tbl.string('tool')
            .unique()
            .notNullable()
        tbl.string('type')
            .defaultTo('none')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tools')
};
