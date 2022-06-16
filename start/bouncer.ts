/**
 * Contract source: https://git.io/Jte3T
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'


export const { actions } = Bouncer.define('deleteUser', async (user: User, authorize: boolean) => {
  console.log('authorize', authorize)
  return authorize
})


export const { policies } = Bouncer.registerPolicies({})
