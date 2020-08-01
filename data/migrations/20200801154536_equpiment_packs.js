
exports.up = function(knex) {
    return knex.schema.createTable('equipment_packs', tbl => {
        tbl.increments()
        tbl.string('pack')
            .unique()
            .notNullable()
        tbl.string('cost')
            .notNullable()
        tbl.text('contents')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('equipment_packs')
};
