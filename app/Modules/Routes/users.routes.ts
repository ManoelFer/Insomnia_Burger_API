
import Route from '@ioc:Adonis/Core/Route'

//TODO: Public Routes
Route.group(() => {
    /**
     * Create User Body:
        {
            "name": string,
            "email": valid e-mail,
            "password": string,
            "profileId": existing profile id
        }
     */
    Route.post('/users', 'UsersController.store')
}).prefix('/v1')


//TODO: Private Routes
Route.group(() => {
    /**
     * Return users list! Example:
     * 
     */
    Route.get('/users', 'UsersController.index')

    /**
    * Return users list! Example:
    * 
    */
    Route.get('/users/:id', 'UsersController.show')

    /**
    * Return users list! Example:
    * 
    */
    Route.put('/users/:id', 'UsersController.update')

    /**
    * Return users list! Example:
    * 
    */
    Route.delete('/users/:id', 'UsersController.destroy')
})
    .prefix('/v1')
    .middleware(['auth', 'permission'])