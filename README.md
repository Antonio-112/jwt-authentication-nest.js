<h1>API de Autenticación con JWT y MongoDB</h1>

Este repositorio contiene una API de autenticación utilizando JWT (JSON Web Tokens) y MongoDB como base de datos, implementada con NestJS.

La API permite a los usuarios registrarse e iniciar sesión en la aplicación. Al registrarse o iniciar sesión con éxito, se devuelve un token de acceso JWT que puede utilizarse para autenticarse en rutas protegidas.

<h2>Características</h2>

- Registro de usuarios
- Inicio de sesión de usuarios
- Autenticación y autorización con JWT
- Integración con MongoDB
- Documentación de API con Swagger

<h2>Requisitos previos</h2>

- Node.js
- MongoDB

<h2>Instalación</h2>

1. Clona este repositorio:

<pre>
git clone https://github.com/<tu-usuario>/api-auth-jwt-mongodb.git
</pre>

2. Cambia al directorio del proyecto:

<pre>
cd api-auth-jwt-mongodb
</pre>

3. Instala las dependencias:

<pre>
npm install
</pre>

4. Configura las variables de entorno. Copia el archivo .env.example a .env y actualiza las variables según sea necesario:

<pre>
cp .env.example .env
</pre>

5. Inicia la API:

<pre>
npm run start
</pre>

La API estará disponible en http://localhost:3000. Puedes acceder a la documentación de Swagger en http://localhost:3000/api.

<h2>Uso</h2>

<h3>Registro</h3>

Realiza una petición POST a /auth/register con los siguientes parámetros:

- username: Nombre de usuario (string)
- email: Correo electrónico (string, formato de correo electrónico)
- password: Contraseña (string)

Si el registro es exitoso, recibirás un token de acceso JWT.

<h3>Inicio de sesión</h3>

Realiza una petición POST a /auth/login con los siguientes parámetros:

- email: Correo electrónico (string, formato de correo electrónico)
- password: Contraseña (string)

Si el inicio de sesión es exitoso, recibirás un token de acceso JWT.

<h3>Autenticación y autorización</h3>

Para acceder a rutas protegidas, incluye el token de acceso JWT en el encabezado de autorización de tus solicitudes como un Bearer Token:

<pre>
Authorization: Bearer <tu-token-jwt>
</pre>

<h2>Licencia</h2>

Este proyecto se encuentra bajo la <a href="LICENSE">Licencia MIT</a>.
