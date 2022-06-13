import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const uniqueKey = 'name'

    await Category.updateOrCreateMany(uniqueKey, [
      {
        name: "Lanches Especiais",
      },
      {
        name: "Lanches Gourmet",
      },
      {
        name: "Combos",
      },
      {
        name: "Bebidas",
      }
    ])
  }
}
