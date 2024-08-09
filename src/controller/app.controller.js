import { newConnection } from "../dataBase/dataBase.js"; // Importa la función newConnection desde el archivo dataBase.js

export const obtenerTareas = async (req, res) => {
    try {
        const connection = await newConnection();// Establece una conexión con la base de datos
        const [results] = await connection.query("SELECT * FROM tasks");//Realiza una consulta para obtener las tareas
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send("Error al obtener las tareas");//Advierte un error si falla la consulta
    }
};

// Define el método crearTarea para crear una nueva tarea
export const crearTarea = async (req, res) => {
    // Extrae los campos title, description e isComplete del cuerpo de la solicitud
    const { title, description, isComplete } = req.body;
    // Valida que los campos no estén vacíos, que title no exceda los 255 caracteres y que isComplete sea un booleano
    if (!title.trim() || !description.trim() || title.length > 255 || typeof isComplete !== "boolean") {
        let msg = "El título y la descripción no pueden estar vacíos.";
        if (typeof isComplete !== "boolean") {
            msg = "Tipo de dato incorrecto"
        }
        if (title.length > 255) {
            msg = "El título no puede tener más de 255 caracteres";
        }
        // Devuelve un mensaje de error si la validación falla
        return res.status(400).send(msg);
    }
    try {
        const connection = await newConnection();// Establece una nueva conexión a la base de datos
        await connection.query(
            "INSERT INTO tasks (title,description,isComplete) VALUES (?,?,?)",//Inserta el registro en la base de datos
            [title, description, isComplete]
        );
        return res.status(201).send("Tarea creada correctamente");
    } catch (error) {
        return res.status(500).send("Error al crear la tarea");
    }
};

export const obtenerTareaId = async (req, res) => {
    const id = req.params.id;
    try {
        const connection = await newConnection();// Establece una nueva conexión a la base de datos
        const [results] = await connection.query(
            "SELECT * FROM tasks WHERE id = ?",//Se realiza la consulta del registro especifico que se desea encontrar
            id
        );
        if (results.length === 0) {
            return res.status(404).send("Tarea no encontrada");//Advierte al no ser encontrado el registro
        }
        return res.status(200).json(results[0]);
    } catch (error) {
        return res.status(500).send("Error al obtener tarea");
    }
};

export const editarTarea = async (req, res) => {
    // Extrae el ID de la tarea de los parámetros de la solicitud
    const id = req.params.id;
    const { title, description, isComplete } = req.body;
    try {
        const connection = await newConnection();// Establece una nueva conexión a la base de datos
        const [result] = await connection.query(
            "UPDATE tasks SET title = ?, description = ?, isComplete=? WHERE id = ?",//Se modifica el registro seleccionado
            [title, description, isComplete, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).send("Tarea no encontrada");
        }
        return res.status(200).send("Tarea editada correctamente");
    } catch (error) {
        return res.status(500).send("Error al editar tarea");
    }
};

export const eliminarTarea = async (req, res) => {
    // Extrae el ID de la tarea de los parámetros de la solicitud
    const id = req.params.id;
    try {
        const connection = await newConnection();// Establece una nueva conexión a la base de datos
        const [result] = await connection.query(
            "DELETE FROM tasks WHERE id = ?",//Elimina el registro seleccionado
            id
        );
        if (result.affectedRows === 0) {
            return res.status(404).send("Tarea no encontrada");
        }
        return res.status(200).send("Tarea eliminada exitosamente");
    } catch (error) {
        return res.status(500).send("Error al intentar eliminar tarea");
    }
};