const Pool = require('pg').Pool;

const { DATABASE_USER, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_HOST } = process.env;

const pool = new Pool({
    user: DATABASE_USER,
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    password: DATABASE_PASSWORD,
    port: DATABASE_PORT
});

const getUserLogs = async (req, res) => {
    return pool.query('SELECT * FROM user_exercise_log', (error, results) => {
        if (error) {
            throw error;
        }
        return res?.status(200).json(results.rows);
    })
}

module.exports = { getUserLogs };