import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class UserFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof User, User>

  public name(value: string): void {
    this.$query.where('name', 'LIKE', `%${value}%`)
  }

  public profile(value: []): void {
    this.$query.whereHas('profiles', (queryProfile) => {
      queryProfile.whereIn('name', value)
    })
  }
}
