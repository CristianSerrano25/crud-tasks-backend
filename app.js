import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { taskrouter } from './src/router/app.routes.js';

// Inicializaciones
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Rutas
app.use('/', taskrouter);

// Escuchar puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});