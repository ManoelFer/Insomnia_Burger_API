
import Route from '@ioc:Adonis/Core/Route'


//TODO: Public Routes
Route.group(() => {
    Route.post('/login', 'AuthController.login')
}).prefix('/v1')