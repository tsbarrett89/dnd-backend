
exports.up = function(knex) {
    return knex.schema.createTable('gear', tbl => {
        tbl.increments()
        tbl.string('name')
            .notNullable()
            .unique()
        tbl.string('type')
            .defaultTo('none')
        tbl.string('cost')
            .notNullable()
        tbl.string('weight')
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('gear')
};
