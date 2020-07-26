
exports.up = function(knex) {
    return knex.schema.createTable('weapon_properties', tbl => {
        tbl.increments()
        tbl.string('property')
            .notNullable()
            .unique()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('weapon_properties')
};
