
exports.up = function(knex) {
    return knex.schema.createTable('subrace_traits', tbl => {
        tbl.increments()
        tbl.integer('subrace_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('subraces')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('trait')
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('subrace_traits')
};
