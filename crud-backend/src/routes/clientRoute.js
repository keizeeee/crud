// defines endpoints for api requests
// communicates with the clientController to handle requests

import express from 'express';
import * as clientController from '../controllers/clientController.js';

// creates a new express object to define routes
// this is where we define the endpoints for our API
const router = express.Router();

// When a user visits GET /clients, you call the getClients function in the controller.
router.get('/clients', clientController.getClients);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);
router.get('/clients/search', clientController.searchClients);

export default router;