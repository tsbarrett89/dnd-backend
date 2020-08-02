
exports.up = function(knex) {
    return knex.schema
        .createTable('damage_types', tbl => {
            tbl.increments()
            tbl.string('type')
                .unique()
                .notNullable()
        })
        .createTable('weapon_types', tbl => {
            tbl.increments()
            tbl.string('type')
                .unique()
                .notNullable()
        })
        .createTable('weapons', tbl => {
            tbl.increments()
            tbl.string('weapon')
                .notNullable()
                .unique()
            tbl.integer('weapon_type_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('weapon_types')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.string('cost')
                .notNullable()
            tbl.string('damage')
                .notNullable()
            tbl.integer('damage_type_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('damage_types')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.string('weight')
                .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('weapons')
        .dropTableIfExists('damage_types')
        .dropTableIfExists('weapon_types')
};
