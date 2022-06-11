import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'

export default class ProfileSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const uniqueKey = 'name'

    await Profile.updateOrCreateMany(uniqueKey, [
      {
        name: 'super_admin',
        description: 'Faz qualquer requisição',
      },
      {
        name: 'admin',
        description: 'Faz qualquer requisição, exceto excluir um usuário',
      },
      {
        name: 'employee',
        description: 'Cadastra e edita produtos, cadastra e edita categorias',
      },
      {
        name: 'client',
        description: 'Faz cadastro, Edita perfil, Vê cardápio, Faz pedidos',
      }
    ])
  }
}
