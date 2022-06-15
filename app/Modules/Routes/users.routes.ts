
import Route from '@ioc:Adonis/Core/Route'

//TODO: Public Routes Users
Route.group(() => {
    /**
     * Create User Body:
        {
            "name": string,
            "email": string,
            "password": string,
            "profileId": integer
        }
     */
    Route.post('/users', 'UsersController.store')
}).prefix('/v1')


//TODO: Private Routes Users
Route.group(() => {
    /**
     * Return users list! Response:
    [
        {
            "id": integer,
            "secure_id": uuid,
            "profile_id": integer,
            "name": string,
            "email": string,
            "remember_me_token": uuid
        },
        ...
    ]
     */
    Route.get('/users', 'UsersController.index')

    /**
    * User return by id! Example:
    * 
    */
    Route.get('/users/:id', 'UsersController.show')

    /**
    * Update user by id! Example:
    * 
    */
    Route.put('/users/:id', 'UsersController.update')

    /**
    * Delete user by id!
    */
    Route.delete('/users/:id', 'UsersController.destroy')
})
    .prefix('/v1')
    .middleware(['auth', 'permission'])