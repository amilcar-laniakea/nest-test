import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Izzy App</h1>

    <h3><a href="https://github.com/amilcar-laniakea/nest-test/tree/test" target="_blank">Documentación entera aqui</a></h3>
    <h3><a href="https://documenter.getpostman.com/view/9537182/SW7Z599g?version=latest" target="_blank">Documentación en Postman aqui</a></h3>
    <h3><a href="https://www.getpostman.com/collections/64047212f4404472c881" target="_blank">Enlace de colección (Postman) aqui</a></h3>

    <h2>Instruciones de uso (Se recomienda usar Aplicación Postman - Ya detallada en la actualización de la documentación en Postman):</h2>

    <br>

    <ul>
      <li>La aplicación no posee frontend, por lo que la herramienta Postman es necesaria.</li>
      <br>
      <li>El ID del item lo genera automaticamente la base de datos, usar el método GET descrito abajo para consultarlos.</li>
      <br>
      <li>Formato .json Usado para los metodos POST y PUT en el Header usando el key "Content-Type" y en el campo value "aplication/json", usando en el Body en modo "raw":</li>
      <br>
      <li>
      {
      "rut": 34234123456789,
      "name": "Jesús2",
      "last_name": "Perez2",
      "phone": "(123)12234456",
      "sex": "masculino",
      "email": "addefg@gmail.com",
      "address": "Lorem ipsum noto lorem"
      }
      </li>
      <br>
      <li>Usar el enlace "https://izzy-crud.herokuapp.com/user/create" con el método POST, para crear un registro en la base de datos.</li>
      <br>
      <li>Usar el enlace "https://izzy-crud.herokuapp.com/user/update?userID=< id del usuario >" con el método PUT para actualizar el registro seleccionado en la basee de datos.</li>
      <br>
      <li>Usar el enlace "https://izzy-crud.herokuapp.com/user" con el método GET para acceder a los registros creados en la base de datos</li>
      <br>
      <li>Usar el enlace "https://izzy-crud.herokuapp.com/user/< id del usuario >" con el método GET para acceder a un registo con esa ID.</li>
      <br>
      <li>Usar el enlace "https://izzy-crud.herokuapp.com/user/delete?userID=< id del producto >" con el método DELETE para borrar el registro seleccionado en la base de datos</li>  
    </ul>
    `;
  }
}
