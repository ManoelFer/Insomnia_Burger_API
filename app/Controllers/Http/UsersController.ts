import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreateUser from 'App/Validators/User/CreateUserValidator'
import UpdateUser from 'App/Validators/User/UpdateUserValidator'

import User from 'App/Models/User'
export default class UsersController {
  public async index({ request, response }: HttpContextContract): Promise<User[] | void> {
    const { page, perPage } = request.qs()
    const noPaginate = request.qs().noPaginate ? true : false
    let users

    try {
      if (noPaginate) return User.query().filter(request.qs()).preload('profiles')
      users = await User.query().filter(request.qs()).preload('profiles').paginate(page || 1, perPage || 5)
    } catch (error) {
      response.status(error.status || 400).json({ message: error.message || 'Erro na listagem de usuários' })
    }

    return response.ok(users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'phone', 'cpf', 'cnpj', 'password'])

    await request.validate(CreateUser)

    try {
      const user = await User.create(data)

      user.related('profiles').attach([4])

      return response.ok(user)
    } catch (error) {
      response.handleError({
        status: error.status || 400,
        message: 'Falha na criação do usuário',
        error: error.message,
      })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const users = await User.query().preload('profiles').where('id', params.id).firstOrFail()

      return response.ok(users)
    } catch (error) {
      response.handleError({
        status: error.status || 400,
        message: 'Usuário não encontrado',
        error: error.message,
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'phone', 'cpf', 'cnpj', 'password'])

    await request.validate(UpdateUser)

    try {
      const user = await User.findByOrFail('secure_id', params.id)

      await user.merge(data).save()

      return response.ok(user)
    } catch (error) {
      response.handleError({
        status: error.status || 400,
        message: 'Falha na atualização do usuário',
        error: error.message,
      })
    }
  }


  public async destroy({ params, response }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('secure_id', params.id)

      await user.delete()

      return response.ok(user)
    } catch (error) {
      response.handleError({
        status: error.status || 400,
        message: 'Falha na exclusão do usuário',
        error: error.message,
      })
    }
  }
}
