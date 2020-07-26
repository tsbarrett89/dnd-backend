
exports.up = function(knex) {
    return knex.schema.createTable('armor', tbl => {
        tbl.increments()
        tbl.string('armor')
            .notNullable()
            .unique()
        tbl.string('armor_type')
            .notNullable()
        tbl.string('cost')
            .notNullable()
        tbl.integer('armor_class')
            .unsigned()
            .notNullable()
        tbl.boolean('add_dex')
            .notNullable()
        tbl.boolean('full_dex')
            .notNullable()
        tbl.integer('strenght_req')
            .unsigned()
            .defaultTo(0)
        tbl.boolean('steal_disadvantage')
            .defaultTo(false)
        tbl.string('weight')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('armor')
};
