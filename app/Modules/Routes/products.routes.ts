import Route from '@ioc:Adonis/Core/Route'

const resource = 'products'
const controller = 'ProductsController'

Route.group(() => {
    Route.post(`/${resource}`, `${controller}.store`)
    Route.get(`/${resource}`, `${controller}.index`)
    Route.get(`/${resource}/:id`, `${controller}.show`)
    Route.put(`/${resource}/:id`, `${controller}.update`)
    Route.delete(`/${resource}/:id`, `${controller}.destroy`)
})
    .prefix('/v1')
    .middleware(['auth'])