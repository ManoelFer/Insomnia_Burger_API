import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import CreateProduct from 'App/Validators/Product/CreateProductValidator'
import UpdateProduct from 'App/Validators/Product/UpdateProductValidator'


export default class ProductsController {
    public async index({ response, request }: HttpContextContract): Promise<Product[] | void> {
        const { page, perPage } = request.qs()
        const noPaginate = request.qs().noPaginate ? true : false
        let products

        try {
            if (noPaginate) return Product.query().filter(request.qs()).preload('category')
            products = await Product.query().filter(request.qs()).preload('category').paginate(page || 1, perPage || 5)
        } catch (error) {
            response.status(error.status || 400).json({ message: error.message || 'Erro na listagem de products' })
        }

        return response.ok(products)
    }

    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['name', 'price'])

        await request.validate(CreateProduct)

        try {
            const user = await Product.create(data)

            return response.ok(user)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Falha na criação do produto',
                error: error.message,
            })
        }
    }

    public async show({ response, params }: HttpContextContract) {
        try {
            const products = await Product.query().preload('category').where('id', params.id).firstOrFail()

            return response.ok(products)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Produto não encontrado',
                error: error.message,
            })
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        const data = request.only(['name', 'price'])

        await request.validate(UpdateProduct)

        try {
            const user = await Product.findByOrFail('id', params.id)

            await user.merge(data).save()

            return response.ok(user)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Falha na atualização do produto',
                error: error.message,
            })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        try {
            const user = await Product.findByOrFail('id', params.id)

            await user.delete()

            return response.ok(user)
        } catch (error) {
            response.handleError({
                status: error.status || 400,
                message: 'Falha na exclusão do produto',
                error: error.message,
            })
        }
    }
}
