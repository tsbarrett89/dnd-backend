
exports.up = function(knex) {
    return knex.schema.createTable('proficiencies_misc', tbl => {
        tbl.increments()
        tbl.string('proficiency')
            .unique()
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('proficiencies')
};
