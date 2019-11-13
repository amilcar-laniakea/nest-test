
//Objeto plantilla para crear los produtcos en la base de datos
export class CreateProductDTO {
    readonly rut: number;
    readonly name: string;
    readonly last_name: string;
    readonly phone: string;
    readonly sex: string;
    readonly email: string;
    readonly address: string;
    readonly createdAt: Date;
}