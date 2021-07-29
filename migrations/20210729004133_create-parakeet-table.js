
exports.up =  async function(knex) {
  await knex.schema.createTable('adopted', table => {
      table.increments();
      table.string('name', 20).notNullable().unique()
      table.string('adoptee', 20).notNullable()
      table.string('location', 50).notNullable()
      table.integer('phone_number', 10).notNullable()
  })
  .createTable('parakeets', table => {
      table.increments()
      table.timestamp('created-at').defaultTo(knex.fn.now());
      table.string('name', 20).notNullable()
      table.string('color', 8)
      table.integer('age', 2)
      table.integer('adopted_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('adopted')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('parakeets')
  .dropTableIfExists('adopted')
};
