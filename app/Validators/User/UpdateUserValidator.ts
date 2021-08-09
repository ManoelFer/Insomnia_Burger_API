import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public refs = schema.refs({
    id: this.ctx.params.id,
  })

  public schema = schema.create({
    name: schema.string.optional({}, [rules.minLength(3)]),
    email: schema.string.optional({ trim: true }, [
      rules.email(),
      rules.unique({
        table: 'users',
        column: 'email',
        caseInsensitive: true,
        whereNot: {
          secure_id: this.refs.id,
        },
      }),
    ]),
    password: schema.string.optional({}, [rules.minLength(6)]),
    profile_id: schema.string.optional({}, [rules.exists({ table: 'profiles', column: 'id' })]),
  })

  public messages = {
    'name.string': 'name deve ser do tipo string',
    'name.minLength': 'name deve ter no mínimo 3 caractéres',

    'email.string': 'email deve ser do tipo string',
    'email.email': 'email deve ser um E-mail válido',
    'email.unique': 'o valor informado para email já existe em nossa base de dados',

    'password.string': 'password deve ser do tipo string',
    'password.minLength': 'password deve ter no mínimo 6 caractéres',

    'profile_id.string': 'profile_id deve ser do tipo string',
    'profile_id.exists': 'o profile_id informado não foi encontrado em nossa base de dados',
  }
}
