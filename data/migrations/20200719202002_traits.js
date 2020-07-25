
exports.up = function(knex) {
    return knex.schem.createTable('traits', tbl => {
        tbl.increments()
        tbl.integer('race_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('races')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('name')
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.scehma.dropTableIfExists('traits')
};
