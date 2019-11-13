import { Schema } from "mongoose";
//formato usado por la base de datos para le majeto de datos
export const ProductSchema = new Schema({
    name: { type: String, required: true},
    description: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});