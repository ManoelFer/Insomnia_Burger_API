import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Permission {
  public async handle({ bouncer, auth }: HttpContextContract, next: () => Promise<void>) {

    let user = auth.user ? await auth.user.related('profiles').query() : false

    if (user) {
      let isSuperAdmin = false

      user.find(({ name }) => { if (name === 'super_admin') isSuperAdmin = true })

      await bouncer.authorize('deleteUser', isSuperAdmin)

      await next()
    }
  }
}
