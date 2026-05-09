# Express MongoDB Cloud API

API REST con Express.js y MongoDB Atlas siguiendo arquitectura en capas.

## Estructura del Proyecto

```
express-mongo-cloud/
│── .github/            # Configuración de workflows
│── src/                # Carpeta fuente
│───── controllers/     # Capa controladora 
│───── models/          # Carpeta de modelos
│───── repositories/    # Capa repositorio
│───── routes/          # Módulos de rutas
│───── services/        # Capa de servicio
│───── app.js           # Configuración base de la aplicación
│───── server.js        # Configuración del servidor
│── .env                # Variables de entorno
│── .env.example        # Ejemplo de variables de entorno
│── package.json        # Configuración del proyecto
```

## Configuración

### 1. Obtener URI de MongoDB Atlas

1. Inicia sesión en [MongoDB Atlas](https://cloud.mongodb.com/)
2. Selecciona tu cluster
3. Haz clic en **"Connect"**
4. Elige **"Connect your application"**
5. Copia el URI de conexión
6. Reemplaza `<password>` con tu contraseña real

### 2. Configurar Variables de Entorno

Edita el archivo `.env` y reemplaza el `MONGO_URI` con tu URI real:

```env
PORT=3000
MONGO_URI=mongodb+srv://ximenachumbirayco_db_user:TU_CONTRASEÑA_REAL@tu-cluster-real.mongodb.net/my_cloud_database?retryWrites=true&w=majority
```

**Importante:** El URI actual en `.env` usa un hostname de ejemplo (`cluster0.abcd123.mongodb.net`) que no existe.

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Iniciar Servidor

Modo desarrollo:
```bash
npm run dev
```

Modo producción:
```bash
npm start
```

## Endpoints de la API

### Users

- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear nuevo usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### Ejemplo de Uso

#### Crear Usuario
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan Pérez", "email": "juan@example.com"}'
```

#### Obtener Todos los Usuarios
```bash
curl http://localhost:3000/api/users
```

## Arquitectura

- **Models:** Definición de esquemas de Mongoose
- **Repositories:** Capa de acceso a datos
- **Services:** Lógica de negocio
- **Controllers:** Manejo de peticiones HTTP
- **Routes:** Definición de rutas de la API

## Tecnologías

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv
- nodemon (desarrollo)
