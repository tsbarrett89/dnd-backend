
exports.up = function(knex) {
    return knex.schema.createTable('character_classes', tbl => {
        tbl.increments()
        
    })
};

exports.down = function(knex) {
  
};
