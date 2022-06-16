import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'

export default class ProductFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Product, Product>

  public name(value: string): void {
    this.$query.where('name', 'LIKE', `%${value}%`)
  }

  public category(value: string | number): void {
    this.$query.whereHas('category', (categoryQuery) => categoryQuery.where('name', value))
  }
}
