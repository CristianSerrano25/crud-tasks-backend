import mysql2 from 'mysql2/promise';

const newConnection = async () => {
    const connection = await mysql2.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        database: "tasks_db",
    });

    return connection;
};

export { newConnection };

