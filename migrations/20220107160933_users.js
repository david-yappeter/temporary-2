exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("user_id").primary();
    table.string("user_name", 255).notNull();
    table.string("user_email", 255).notNull();
    table.string("user_address", 255).notNull();
    table.string("user_phone", 255).notNull();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
