import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from 'App/Models/Category'

import CreateCategory from 'App/Validators/Category/CreateCategoryValidator'
import UpdateCategory from 'App/Validators/Category/UpdateCategoryValidator'

export default class CategoriesController {
    public async index({ response }: HttpContextContract) {
        const categories = await Category.all()

        return response.ok(categories)
    }

    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['name'])

        await request.validate(CreateCategory)

        try {
            const user = await Category.create(data)

            return response.ok(user)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Falha na criação da categoria',
                error: error.message,
            })
        }
    }

    public async show({ response, params }: HttpContextContract) {
        try {
            const category = await Category.query().preload('products').where('id', params.id).firstOrFail()

            return response.ok(category)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Categoria não encontrada',
                error: error.message,
            })
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        const data = request.only(['name'])

        await request.validate(UpdateCategory)

        try {
            const user = await Category.findByOrFail('id', params.id)

            await user.merge(data).save()

            return response.ok(user)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Falha na atualização da categoria',
                error: error.message,
            })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        try {
            const user = await Category.findByOrFail('id', params.id)

            await user.delete()

            return response.ok(user)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Falha na exclusão da categoria',
                error: error.message,
            })
        }
    }
}
