
exports.up = function(knex) {
    return knex.schema.createTable('subrace_traits', tbl => {
        tbl.increments()
        tbl.integer('subrace_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('subraces')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('trait')
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
  
};
