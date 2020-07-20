
exports.up = function(knex) {
    return knex.schema.createTable('alignment', tbl => {
        tbl.increments()
        tbl.string('alignment')
            .notNullable()
            .unique()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('alignment')
};
