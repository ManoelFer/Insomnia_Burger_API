import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
    const Response = this.app.container.use('Adonis/Core/Response')

    //Intercept erros
    Response.macro('handleError', function (messages) {
      const { message, error } = messages

      switch (messages.status) {
        case 404:
          this.notFound({ message, specificError: 'Não encontrado!', error })
          break

        default:
          this.status(messages.status).json(messages)
          break
      }

      return this
    })
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
