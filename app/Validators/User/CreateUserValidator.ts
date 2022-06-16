//DOCUMENTATION: https://docs.adonisjs.com/reference/validator/rules/exists

import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MessagesCustom from '../MessagesCustom'

export default class CreateUserValidator extends MessagesCustom {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.alpha({
        allow: ['space', 'underscore', 'dash'],
      }),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email', caseInsensitive: true }),
    ]),
    phone: schema.string({ trim: true }, [rules.mobile({ locale: ['pt-BR'] }), rules.unique({ table: "users", column: "phone", caseInsensitive: true })]),
    cpf: schema.string({ trim: true }, [rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/), rules.unique({ table: "users", column: "cpf", caseInsensitive: true })]),
    cnpj: schema.string({ trim: true }, [rules.regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/), rules.unique({ table: "users", column: "cnpj", caseInsensitive: true })]),
    password: schema.string({}, [rules.minLength(6)])
  })
}
