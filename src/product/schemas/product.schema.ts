import { Schema } from "mongoose";
//formato usado por la base de datos para le majeto de datos
export const ProductSchema = new Schema({
    rut: { type: Number, required: true},
    name: { type: String, required: true},
    last_name: { type: String, required: true},
    phone: { type: String, required: true},
    sex: { type: String, required: false},
    email: { type: String, required: true},
    address: {type: String, required: false},
    createdAt: {
        type: Date,
        default: Date.now
    }
});