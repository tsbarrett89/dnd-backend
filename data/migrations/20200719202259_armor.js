
exports.up = function(knex) {
    return knex.schema
        .createTable('armor_types', tbl => {
            tbl.increments()
            tbl.string('type')
                .unique()
                .notNullable()
        })
        .createTable('armor', tbl => {
            tbl.increments()
            tbl.string('armor')
                .notNullable()
                .unique()
            tbl.integer('armor_type_id')
                .unisgned()
                .notNullable()
                .references('id')
                .inTable('armor_types')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
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
    return knex.schema
        .dropTableIfExists('armor')
        .dropTableIfExists('armor_types')
};
