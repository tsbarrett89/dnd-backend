
exports.up = function(knex) {
    return knex.schema.createTable('languages', tbl => {
        tbl.increments()
        tbl.string('language')
            .unique()
            .notNullable()
        tbl.string('script')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('languages')
};
