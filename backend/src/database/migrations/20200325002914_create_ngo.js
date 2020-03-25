
exports.up = function(knex) {
  
    //  Create ngo table
    return knex.schema.createTable('ngo', function (table) {

        // Primary key
        table.string('id').primary();
        
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('city').notNullable();
        table.string('state', 2).notNullable();
    });
};

exports.down = function(knex) {

    // If fails to create table ngo
    return knex.schema.dropTable('ngo');
  
};
