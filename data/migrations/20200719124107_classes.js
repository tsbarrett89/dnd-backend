
exports.up = function(knex) {
    return knex.schema.createTable('classes', tbl => {
        tbl.increments();
        tbl.string('class_name')
            .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('classes')
};
