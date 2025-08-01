// This talks to the database to get client data
import { query } from "../db.js";


export const getClients = async() => {
    const {rows} = await query('SELECT * FROM clients_tb');
    return rows;
}

export const createClient = async(clientData) => {
    const {name, email, job, rate, isactive} = clientData;

    const {rows} = await query(
        `INSERT INTO clients_tb (name, email, job, rate, isactive) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, job, rate, isactive]
    );
    return rows[0];
}

export const updateClient = async(clientData, clientId) => {
    const {name, email, job, rate, isactive} = clientData;

    const {rows} = await query(
        `UPDATE clients_tb SET name = $1, email = $2, job = $3, rate = $4, isactive = $5
        WHERE id = $6 RETURNING *`,
        [name, email, job, rate, isactive, clientId]
    );
    return rows[0];
}

export const deleteClient = async(clientId) => {
    const {rowCount} = await query(`DELETE FROM clients_tb WHERE id = $1`, [clientId]);
    return rowCount > 0; // 1 if client exists and was deleted, 0 if not found
}
// ::text casts column to text
export const searchClients = async (searchTerm) => {
    const {rows} = await query(
        `SELECT * FROM clients_tb WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1 OR rate::text ILIKE $1 OR isactive::text ILIKE $1`,
        [`%${searchTerm}%`]
    );
    return rows;
};