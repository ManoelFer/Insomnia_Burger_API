
import Route from '@ioc:Adonis/Core/Route'

const resource = 'users'
const controller = 'UsersController'

//TODO: Public Routes Users
Route.group(() => {
    /**
     * Create User Body:
        {
            "name": "string",
            "email": "string",
            "password": "string"
            "phone": "",
            "cpf": "",
            "cnpj": "",
        }
     */
    Route.post('/users', 'UsersController.store')
}).prefix('/v1')


//TODO: Private Routes Users
Route.group(() => {

    Route.get(`/${resource}`, `${controller}.index`)
    Route.get('/users/:id', 'UsersController.show')

    /**
    * Update User Body:
       {
           "name": "string",
           "email": "string",
           "password": "string"
           "phone": "",
           "cpf": "",
           "cnpj": "",
       }
    */
    Route.put('/users/:id', 'UsersController.update')


    Route.delete('/users/:id', 'UsersController.destroy').middleware('permission')
})
    .prefix('/v1')
    .middleware(['auth'])