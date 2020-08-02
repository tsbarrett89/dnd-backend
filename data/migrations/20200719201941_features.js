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
        tbl.string('feature')
            .notNullable()
        tbl.integer('level')
            .unsigned()
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
    .createTable('feature_options', tbl => {
        tbl.increments()
        tbl.integer('feature_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('features')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('option')
            .notNullable()
        tbl.text('description')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('feature_options')
        .dropTableIfExists('features')
};
