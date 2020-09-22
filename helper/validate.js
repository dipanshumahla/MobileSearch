
var Joi = require('joi')


function validateData(product) {
    const JoiSchema = Joi.object({
        name: Joi.string().max(30).required(),
        type: Joi.string().required(),
        weight: Joi.string().required(),
        price: Joi.string().required(),
        color: Joi.string().required(),
        features: Joi.array().required()
    }).options({ abortEarly: false });

    return JoiSchema.validate(product)
}


module.exports = { validateData }