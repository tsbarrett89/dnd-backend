
exports.up = function(knex) {
    return knex.schema.createTable('character_classes', tbl => {
        tbl.increments()
        tbl.integer('character_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('characters')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('class_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('class_level')
            .unsigned()
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('character_classes')
};
