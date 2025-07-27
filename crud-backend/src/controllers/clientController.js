// handles requests and responses
// it connects api to the service
import * as clientServices from '../services/clientServices.js';


// req, res are from express
export const getClients = async (req, res) => {
    try{
        const clients = await clientServices.getClients();
        res.status(200).json(clients);
    } catch (err) {
        console.error('Error fetching clients:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createClient = async (req, res) => {
    try{
        const clientData = req.body; // get the client data from the request body
        const newClient = await clientServices.createClient(clientData);
        res.status(200).json(newClient);
    } catch (err) {
        console.error('Error adding client:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const updateClient = async (req, res) => {
    try{
        const clientId = req.params.id; // if you have the route /user/:id, then the “id” property is available as req.params.id
        const clientData = req.body; // get the client data from the request body
        const updatedClient =  await clientServices.updateClient(clientData, clientId);
        // if it does not exist
        if (!updatedClient){
            return res.status(404).json({message: 'Client not found'})
        }
        res.status(200).json(updatedClient);

    } catch (err) {
        console.error('Error updating clients:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteClient = async (req, res) => {
    try{
        const clientId = req.params.id; //
        const deleteClient =  await clientServices.deleteClient(clientId);
        // if it does not exist
        if (!deleteClient){
            return res.status(404).json({message: 'Client not found'})
        }
        res.status(200).send();

    } catch (err) {
        console.error('Error deleting client:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const searchClients = async (req, res) => {
    try{
        const searchTerm = req.query.q;
        const clients = await clientServices.searchClients(searchTerm);
        res.status(200).json(clients);

    } catch (err) {
        console.error('Error searching clients:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}