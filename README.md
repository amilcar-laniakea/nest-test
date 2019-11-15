<<<<<<< HEAD
<h1>Documentación Preliminar(Faltan Ajustes)</h1>

En la "carpeta SRC" se encuentran las siguientes carpetas que se crearon para usarlas en el proyecto:

<ul>
  <h3>Product</h3>
  <br>
  <li>dto</li>
  <li>interfaces</li>
  <li>schemas</li>
</ul>
<br>
<p>Dentro de la Carpeta dto se encuentra el objeto que maneja internamente la app para procesar datos(Data Object Transfer)</p>

<p>dentro de la carpeta interface se encuentra el archivo de interface que muestra respuesta  a las peticiones de la app</p>

<p>la carpeta schema se encuentra el modelo de formato que permite los datos de entrada a la base de datos, en este cado se uso mongoDB como  herramienta.</p>

<h2>Problemas Conocidos Relacionado a la conexion remota(Heroku y Mongo DB Atlas)</h2>

<p>Se logró la implementación ccrrecta de la app en la herramienta Heroku por medio del siguiente tutorial:</p>

<p><a href="https://www.joshmorony.com/deploying-a-production-nestjs-server-on-heroku/" target="_blank">Deploying a Production NestJS Server on Heroku</a></p>

<p>A través de los datos proporcionados en el link, se resolvieron algunos problemas como:</p>

<ul>
  <li>Modificar el archivo src/main.ts para el uso de un puerto dinámico:</li>
  <li>Modificada la sentencia start:prod  en package.json:</li>
  <li>Actualizar Heroku Build (NODE_ENV and production) - enviroment variables</li>
  <li>Crear un archivo llamado Procfile en la raiz del proyecto</li>
</ul>

<p>Sin embargo, la app implementada en Heroku presenta un problema de conexión a la base de datos de mongoDB Atlas, en modo local funciona sin problemas.</p>

<h2>Instruciones de uso (Instalación):</h2>

<ul>
  <li>Descargar el paquete de Github y usar la rama "comments", es donde se encuentra la funcionalidad más avanzada y la doumentación interna.</li>
  <li>Ejecutar el comando "npm install" para instalar las dependencias del proyecto</li>
  <li>Moverse al archivo en el root de "app.module.ts" y elegir la conexion de Mongo DB o MongoDB atlas(por defecto la conexion remota se encuentra comentada) debe tener instalado Mongo DB en la PC<a href="https://www.mongodb.com/download-center/enterprise" target="_blank">Descargar MongoDB, </a><a href="https://www.mongodb.com/cloud/atlas" target="_blank">Usar MongoDB Atlas</a></li>
</ul>

<h2>Instruciones de uso (Usar Aplicación Postman, por ahora funciona el método en local):</h2>

<ul>
  <li>La aplicación no posee frontend, por lo que la herramienta Postman es necesaria</li>
  <li>Usar el enlace "localhost:3000/user/create" con el método POST, en el Header usando el key "Content-Type" y en el campo value "aplication/json" para crear un registro en la base de datos, usando en el Body en modo "raw" un formato de json como el siguiente: 
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
  <li>Usar el enlace "localhost:3000/user" con el método GET para acceder a los registros creados en la base de datos</li>
  <li>usar el enlace "localhost:3000/user/delete?userID=< id del producto >" con el método DELETE para borrar el registro seleccionado en la base de datos</li>
  <li>usar el enlace "localhost:3000/user/update?userID=< id del producto >" con el método PUT para actualizar el registro seleccionado en la basee de datos(usar en el Body-raw el json usado con la sentencia crear)</li>
   <li>usar el enlace "localhost:3000/user/create" con el método POST para crear un registro  en la basee de datos(usar en el Body-raw el json usado con la sentencia crear)</li>
</ul>

<h2>Requisitos no finalizados:</h2>

<ul>
  <li>Validaciones de campos por medio del paquete hapi-Joi</li>
  <li>Consultas GET por cada campo</li>
  <li>Más número de direcciones</li>
</ul>


<h2>Nota: en la rama que empieza con la frase "experimental", se encuentra un desarrollo preliminar de consultas avanzadas y validaciones por medio del paquete hapy-joi, aunque no es funcional.</h2>
=======
Proyecto de Prueba amilcar:
el módulo produtcs hace referencia a lo que se quiere conseguir, este maneja CRUD:

en product.Schema.ts se describe el tipo de datos (Que por ahora maneja la aplicacion)

en el archivo product.service.t se describe todos los métodos o endpoints de la aplicación

su llamado está en el archivo product.controller.ts
>>>>>>> abb104a22ec6bd649cd698f00957c4f1bee814a9
