
exports.up = function(knex) {
    return knex.schema.createTable('characters', tbl => {
        tbl.increments();
        tbl.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('character_name')
            .notNullable()
        tbl.string('level')
            .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters')
};
