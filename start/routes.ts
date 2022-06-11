/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

//TODO Test Routes
Route.get('/', ({ response }) => {
  response.status(200).send('Bem-vindo a melhor API de gerenciamento de restaurantes!')
})

//TODO Public Routes
Route.group(() => {
  Route.post('/login', 'AuthController.login')

  /**
   * Return users list! Example:
   * 
   */
  Route.post('/users', 'UsersController.store')
}).prefix('/v1')

//TODO Auth Routes
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

  //
})
  .prefix('/v1')
  .middleware(['auth', 'permission'])
