//DOCUMENTATION: https://docs.adonisjs.com/reference/validator/rules/exists

import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.required(), rules.minLength(3)]),
    email: schema.string({ trim: true }, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [rules.required(), rules.minLength(6)]),
    profile_id: schema.string({}, [
      rules.required(),
      rules.exists({ table: 'profiles', column: 'id' }),
    ]),
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

    'profile_id.string': 'profile_id deve ser do tipo string',
    'profile_id.required': 'profile_id é obrigatório',
    'profile_id.exists': 'o profile_id informado não foi encontrado em nossa base de dados',
  }
}
