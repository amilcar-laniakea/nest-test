import { Document } from "mongoose";
//interface usada en las peticiones del back al front
export interface Product extends Document{
    readonly name: string,
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}