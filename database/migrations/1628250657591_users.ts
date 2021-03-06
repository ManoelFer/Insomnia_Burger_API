import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned()

      table.uuid('secure_id').unique().notNullable()

      table.string('name', 50).notNullable()
      table.string('email', 255).unique().notNullable()
      table.string('phone', 50).unique().notNullable()
      table.string('cpf', 50).unique()
      table.string('cnpj', 50).unique()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
