// The pg library is a tool that lets Node.js talk to a PostgreSQL database. It includes functions to connect, run queries, etc.
import pg from "pg";
import env from "dotenv";

env.config(); // loads environment variables from .env file into process.env

// imports the contents of the .env file to db.js
// new database connection object
// process.env is an object that contains the environment variables ( Node.js)
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// connects to the PostgreSQL database using the credentials from the .env file
// connect() is from pg library
db.connect();

db.on('error', (err) => {
    console.error('Database connection error:', err);
    process.exit(-1);
})

// exports the query function to be used in other files
// text is the SQL query string, params are the values to be used in the query
export const query = (text, params) => db.query(text, params);