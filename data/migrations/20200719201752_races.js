
exports.up = function(knex) {
    return knex.schema.createTable('races', tbl => {
        tbl.increments()
        tbl.string('race')
            .notNullable()
            .unique()
        tbl.text('description')
            .notNullable()
        tbl.string('ability_score_increase')
            .notNullable()
        tbl.text('age')
            .notNullable()
        tbl.text('alignment')
            .notNullable()
        tbl.text('size')
            .notNullable()
        tbl.integer('speed')
            .notNullable()
        tbl.integer('darkvision')
            .defaultTo(0)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('races')
};
