
exports.up = function(knex) {
    return knex.schema.createTable('weapons', tbl => {
        tbl.increments()
        tbl.string('weapon')
            .notNullable()
            .unique()
        tbl.string('weapon_type')
            .notNullable()
        tbl.string('cost')
            .notNullable()
        tbl.string('damage')
            .notNullable()
        tbl.string('damage_type')
            .notNullable()
        tbl.string('weight')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('weapons')
};
