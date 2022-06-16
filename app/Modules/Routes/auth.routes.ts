
import Route from '@ioc:Adonis/Core/Route'

/**
 body: 
 {
    "email": "example@example.com",
    "password": "examplepassoword"
 }
 */
Route.group(() => {
    Route.post('/login', 'AuthController.login')
}).prefix('/v1')