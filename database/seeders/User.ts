import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        name: 'Manoel Fernandes Neto',
        email: 'manoel@email.com',
        password: 'manoelpassword',
        profileId: 1,
      },
      {
        name: 'Aristóteles',
        email: 'ari@email.com',
        password: 'aripassword',
        profileId: 2,
      },
      {
        name: 'Edith Hudson',
        email: 'edith@email.com',
        password: 'edithpassword',
        profileId: 2,
      },
      {
        name: 'Miguel',
        email: 'miguel@email.com',
        password: 'miguelpassword',
        profileId: 3,
      },
      {
        name: 'Arthur',
        email: 'arthur@email.com',
        password: 'arthurpassword',
        profileId: 3,
      },
      {
        name: 'Gael',
        email: 'gael@email.com',
        password: 'gaelpassword',
        profileId: 3,
      },
      {
        name: 'Heitor',
        email: 'heito@email.com',
        password: 'heitorpassword',
        profileId: 3,
      },
      {
        name: 'Theo',
        email: 'theo@email.com',
        password: 'theopassword',
        profileId: 3,
      },
      {
        name: 'Davi',
        email: 'davi@email.com',
        password: 'davipassword',
        profileId: 4,
      },
      {
        name: 'Gabriel',
        email: 'gabriel@email.com',
        password: 'gabrielpassword',
        profileId: 4,
      },
      {
        name: 'Bernardo',
        email: 'bernardo@email.com',
        password: 'bernardopassword',
        profileId: 4,
      },
      {
        name: 'Samuel',
        email: 'samuel@email.com',
        password: 'samuelpassword',
        profileId: 4,
      },
      {
        name: 'João Miguel',
        email: 'joaomiguel@email.com',
        password: 'joaomiguelpassword',
        profileId: 4,
      },
      {
        name: 'Helena',
        email: 'helena@email.com',
        password: 'helenapassword',
        profileId: 4,
      },
      {
        name: 'Alice',
        email: 'alice@email.com',
        password: 'alicepassword',
        profileId: 3,
      },
      {
        name: 'Laura',
        email: 'laura@email.com',
        password: 'laurapassword',
        profileId: 3,
      },
      {
        name: 'Maria Alice',
        email: 'mariaalice@email.com',
        password: 'mariaalicepassword',
        profileId: 3,
      },
      {
        name: 'Valentina',
        email: 'valentina@email.com',
        password: 'valentinapassword',
        profileId: 3,
      },
      {
        name: 'Heloísa',
        email: 'heloisa@email.com',
        password: 'heloisapassword',
        profileId: 4,
      },
      {
        name: 'Maria Clara',
        email: 'mariaclara@email.com',
        password: 'mariaclarapassword',
        profileId: 4,
      },
      {
        name: 'Maria Cecília',
        email: 'mariacecilia@email.com',
        password: 'mariaceciliapassword',
        profileId: 3,
      },
      {
        name: 'Maria Julia',
        email: 'mariajulia@email.com',
        password: 'mariajuliapassword',
        profileId: 3,
      },
      {
        name: 'Sophia',
        email: 'sophia@email.com',
        password: 'sophiapassword',
        profileId: 4,
      },
    ])
  }
}
