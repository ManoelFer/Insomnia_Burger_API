import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

import 'App/Modules/routes/users.routes'
import 'App/Modules/routes/auth.routes'


//TODO: Test Routes
Route.get('/', async ({ view }) => {
  const html = await view.render('welcome_insomnias', {
    greeting: 'Hello'
  })
  return html
})

//TODO: Menu Route
Route.get('/menu', async ({ response }) => {
  const menu = Application.publicPath('Cardapio_Insomnias.png')
  response.download(menu)
})