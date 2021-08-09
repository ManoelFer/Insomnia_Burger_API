import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'admin@admin.com',
        password: 'admin',
        permission_id: 1,
      },
      {
        email: 'ari@email.com',
        password: 'admin',
        permission_id: 2,
      },
      {
        email: 'manoel@email.com',
        password: 'admin',
        permission_id: 3,
      },
    ])
  }
}
