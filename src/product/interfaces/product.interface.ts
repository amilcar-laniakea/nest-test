import { Document } from "mongoose";
//interface usada en las peticiones del back al front
export interface Product extends Document{
    readonly rut: number;
    readonly name: string;
    readonly last_name: string;
    readonly phone: string;
    readonly sex: string;
    readonly email: string;
    readonly address: string;
    readonly createdAt: Date;
}