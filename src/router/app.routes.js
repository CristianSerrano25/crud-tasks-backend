import { Router } from 'express';
import { ctrl } from '../controller/app.controller.js';


const router = Router();

router.get('/tasks', ctrl.obtenerTareas);
router.get ('/tasks/:id', ctrl.obtenerTareaId);
router.post('/tasks', ctrl.crearTarea);
router.put('/tasks/:id', ctrl.editarTarea);
router.delete('/tasks/:id', ctrl.eliminarTarea);

export { router };