//DOCUMENTATION: https://docs.adonisjs.com/reference/validator/rules/exists

import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.minLength(3)]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email', caseInsensitive: true }),
    ]),
    password: schema.string({}, [rules.minLength(6)]),
    profileId: schema.string({}, [rules.exists({ table: 'profiles', column: 'id' })]),
  })

  public messages = {
    'name.string': 'name deve ser do tipo string',
    'name.required': 'name é obrigatório',
    'name.minLength': 'name deve ter no mínimo 3 caractéres',

    'email.string': 'email deve ser do tipo string',
    'email.required': 'email é obrigatório',
    'email.email': 'email deve ser um E-mail válido',
    'email.unique': 'o valor informado para email já existe em nossa base de dados',

    'password.string': 'password deve ser do tipo string',
    'password.required': 'password é obrigatório',
    'password.minLength': 'password deve ter no mínimo 6 caractéres',

    'profileId.string': 'profileId deve ser do tipo string',
    'profileId.required': 'profileId é obrigatório',
    'profileId.exists': 'o profileId informado não foi encontrado em nossa base de dados',
  }
}
