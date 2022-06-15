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
        phone: "(86) 99192-1257",
        cpf: "368.360.046-26",
        cnpj: "62.257.650/0001-74",
        password: 'manoelpassword',
        profileId: 1,
      },
      {
        name: 'Aristóteles',
        email: 'ari@email.com',
        phone: "(42) 99892-2734",
        cpf: "585.888.158-00",
        cnpj: "36.136.342/0001-80",
        password: 'aripassword',
        profileId: 2,
      },
      {
        name: 'Edith Hudson',
        email: 'edith@email.com',
        phone: "(96) 98985-3870",
        cpf: "776.148.168-70",
        cnpj: "63.702.648/0001-20",
        password: 'edithpassword',
        profileId: 2,
      },
      {
        name: 'Miguel',
        email: 'miguel@email.com',
        phone: "(19) 98846-6278",
        cpf: "710.726.600-40",
        cnpj: "15.203.526/0001-46",
        password: 'miguelpassword',
        profileId: 3,
      },
      {
        name: 'Gael',
        email: 'gael@email.com',
        phone: "(23) 96025-5633",
        cpf: "446.148.102-68",
        cnpj: "71.232.742/0001-90",
        password: 'gaelpassword',
        profileId: 3,
      },
      {
        name: 'Heitor',
        email: 'heito@email.com',
        phone: "(33) 92285-5921",
        cpf: "817.706.333-24",
        cnpj: "12.320.320/0001-08",
        password: 'heitorpassword',
        profileId: 3,
      },
      {
        name: 'Maria Julia',
        email: 'mariajulia@email.com',
        phone: "(24) 97109-6972",
        cpf: "844.801.821-44",
        cnpj: "84.485.102/0001-34",
        password: 'mariajuliapassword',
        profileId: 3,
      },
      {
        name: 'Sophia',
        email: 'sophia@email.com',
        phone: "(17) 93948-9521",
        cpf: "525.628.482-76",
        cnpj: "55.254.428/0001-52",
        password: 'sophiapassword',
        profileId: 4,
      },
    ])
  }
}
