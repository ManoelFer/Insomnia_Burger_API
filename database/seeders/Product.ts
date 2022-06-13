import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const uniqueKey = 'name'

    await Product.updateOrCreateMany(uniqueKey, [
      {
        categoryId: 1,
        name: 'Top Burger Especial',
        price: 4
      },
      {
        categoryId: 1,
        name: 'Cheese Burger Especial',
        price: 4.50
      },
      {
        categoryId: 1,
        name: 'Salada Burger Especial',
        price: 4.50
      },
      {
        categoryId: 1,
        name: 'Salada Burger Completo',
        price: 4.50
      },
      {
        categoryId: 2,
        name: 'Duplo Salada Simples',
        price: 4
      },
      {
        categoryId: 2,
        name: 'Duplo Salada Especial',
        price: 4.50
      },
      {
        categoryId: 2,
        name: 'Duplo Cheese Burger',
        price: 4.50
      },
      {
        categoryId: 2,
        name: 'Duplo Cheese Burger Especial',
        price: 4.50
      },
      {
        categoryId: 3,
        name: 'Duplo Picanha Gourmet',
        price: 4
      },
      {
        categoryId: 3,
        name: 'Cheese Costela Burger',
        price: 4.50
      },
      {
        categoryId: 3,
        name: 'Salada Burger Gourmet',
        price: 4.50
      },
      {
        categoryId: 3,
        name: 'Salada Gourmet Especial',
        price: 4.50
      },
      {
        categoryId: 4,
        name: 'Refrigerante',
        price: 4
      },
      {
        categoryId: 4,
        name: 'Suco Natural',
        price: 4.50
      },
      {
        categoryId: 4,
        name: 'Água',
        price: 4.50
      },
      {
        categoryId: 4,
        name: 'Suco de polpa',
        price: 4.50
      }
    ])
  }
}
