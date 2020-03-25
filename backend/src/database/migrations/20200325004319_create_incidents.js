
exports.up = function(knex) {

    //  Create incidents table
    return knex.schema.createTable('incidents', function (table) {
        
        // Primary key
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        // Foreign key
        table.string('ngo_id').notNullable();
        table.foreign('ngo_id').references('id').inTable('ngotable');
    });
  
};

exports.down = function(knex) {

    // If fails to create table incidents
    return knex.schema.dropTable('incidents');
  
};
