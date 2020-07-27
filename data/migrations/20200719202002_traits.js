
exports.up = function(knex) {
    return knex.schema.createTable('traits', tbl => {
        tbl.increments()
        tbl.integer('race_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('races')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('trait')
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('traits')
};
