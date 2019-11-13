
//Objeto plantilla para crear los produtcos en la base de datos
export class CreateProductDTO {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}