
exports.up = function(knex) {
    return knex.schema.createTable('languages', tbl => {
        tbl.increment()
        tbl.string('language')
            .unique()
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('languages')
};
