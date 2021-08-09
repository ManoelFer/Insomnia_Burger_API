export default class AuthController {
  public async login({ request, auth, response }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const user = await auth.use('web').attempt(email, password)

      return response.status(200).json(user)
    } catch (error) {
      return response.status(error.status || 400).json({ erro: error.message })
    }
  }
}
