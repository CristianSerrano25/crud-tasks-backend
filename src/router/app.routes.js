import { Router } from 'express';
import { crearTarea,eliminarTarea,editarTarea,obtenerTareaId,obtenerTareas} from '../controller/app.controller.js';


const taskrouter = Router();

taskrouter.get('/tasks', obtenerTareas);
taskrouter.get ('/tasks/:id', obtenerTareaId);
taskrouter.post('/tasks', crearTarea);
taskrouter.put('/tasks/:id', editarTarea);
taskrouter.delete('/tasks/:id', eliminarTarea);

export { taskrouter };