
exports.up = function(knex) {
    return knex.schema.createTable('subraces', tbl => {
        tbl.increments()
        tbl.integer('race_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('races')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('subrace')
            .notNullable()
            .unique()
        tbl.string('ability_score_increase')
            .defaultTo('none')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('subraces')
};
