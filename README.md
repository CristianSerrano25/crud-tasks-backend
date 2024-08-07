# CRUD de Tareas 

### Pasos para ejecutar el servidor localmente

1. Ubicarse en el directorio del respositorio correspondiente

```bash
cd crud-tasks-backend
```

2. Instalar los módulos de node (**node_modules**)

```bash
npm install o npm i
```

3. Ejecutar el servidor

```bash
npm run dev
```

4. Probar el servidor

#### [http://localhost:3000](http://localhost:3000)

- Para cambiar el puerto se debe dirigir a la linea 8 del archivo app.js

```javascript
const PORT = 3000;
```

### Endpoints:

- Utilizar alguna herramienta para enviar peticiones al servidor como Postman o Thunder Client


`GET /tasks`: Obtener todas las tareas del servidor.

`GET /task/:id`: Obtener una tarea específica por su ID.

`POST /tasks`: Crear una nueva tarea.

`PUT /task/:id`: Actualizar una tarea específica por su ID.

`DELETE /task/:id`: Eliminar una tarea específica por su ID.