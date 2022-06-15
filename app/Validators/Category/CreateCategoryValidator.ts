import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MessagesCustom from '../MessagesCustom'

export default class CreateCategoryValidator extends MessagesCustom {
	constructor(protected ctx: HttpContextContract) {
		super()
	}

	public schema = schema.create({
		name: schema.string({ trim: true }, [
			rules.minLength(3),
			rules.unique({ table: 'categories', column: 'name', caseInsensitive: true }),
		])
	})
}
