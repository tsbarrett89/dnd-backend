exports.up = function(knex) {
    return knex.schema.createTable('features', tbl => {
        tbl.increments()
        tbl.integer('class_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('archetype_id')
            .unsigned()
            .defaultTo(0)
            .references('id')
            .inTable('class_archetypes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('name')
            .notNullable()
        tbl.integer('level')
            .unsigned()
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('features')
};
