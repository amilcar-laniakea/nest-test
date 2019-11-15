import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Izzy App</h1>

    <h3><a href="https://github.com/amilcar-laniakea/nest-test/tree/test" target="_blank">Documentación entera aqui</a></h3>

    <h2>Instruciones de uso (Usar Aplicación Postman):</h2>

    <br>

    <ul>
      <li>La aplicación no posee frontend, por lo que la herramienta Postman es necesaria</li>
      <br>
      <li>Usar el enlace "/user/create" con el método POST, en el Header usando el key "Content-Type" y en el campo value "aplication/json" para crear un registro en la base de datos, usando en el Body en modo "raw" un formato de json como el siguiente: 
      <br>
      {
      "rut": 34234123456789,
      "name": "Jesús2",
      "last_name": "Perez2",
      "phone": "(123)12234456",
      "sex": "masculino",
      "email": "addefg@gmail.com",
      "address": "Lorem ipsum noto lorem"
      }
      <br>
    </li>
      <br>
      <li>Usar el enlace "/user" con el método GET para acceder a los registros creados en la base de datos</li>
      <br>
      <li>usar el enlace "/user/delete?userID=< id del producto >" con el método DELETE para borrar el registro seleccionado en la base de datos</li>
      <br>
      <li>usar el enlace "/user/update?userID=< id del producto >" con el método PUT para actualizar el registro seleccionado en la basee de datos(usar en el Body-raw el json usado con la sentencia crear)</li>
      <br>
      <li>usar el enlace "/user/create" con el método POST para crear un registro  en la basee de datos(usar en el Body-raw el json usado con la sentencia crear)</li>
    </ul>
    `;
  }
}
