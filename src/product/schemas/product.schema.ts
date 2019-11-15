import { Schema } from "mongoose";
import { Joi } from "@hapi/joi";
//formato usado por la base de datos para le majeto de datos
 const userSchema = new Schema({
    rut: Number, 
    name: String, 
    last_name:String,
    phone: String,
    sex: String,
    email: String,
    address: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export const ProductSchema = userSchema.methods.joiValidate = function(obj) {
	
	var schema = {
        rut: Joi.number().min(9).max(9).required(),
		name: Joi.string().min(2).max(30).required(),
        last_name: Joi.string().min(2).max(30).required(),
        phone: Joi.number().min(11).max(11).required(),
        sex: Joi.string().min(1).max(1).required(),
		email: Joi.string().email().required(),
		address: Joi.types.String().required(),
		createdAt: Joi.types.Date(),
	}
    return Joi.validate(obj, schema);
}
