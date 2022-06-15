import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MessagesCustom from '../MessagesCustom'

export default class UpdateProductValidator extends MessagesCustom {
	constructor(protected ctx: HttpContextContract) {
		super()
	}

	public schema = schema.create({
		name: schema.string.optional({ trim: true }, [
			rules.minLength(3),
			rules.unique({ table: 'products', column: 'name', caseInsensitive: true }),
		]),
		price: schema.number.optional([rules.unsigned()]),
	})
}
