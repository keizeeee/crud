// entry point for the backend server is index.js
// Express is a web framework for Node.js, it allows us to create a server (handle http stuff) and define routes
import express from 'express';
import cors from 'cors';
import clientRoute from './routes/clientRoute.js';

//creates Express application object
const app = express();
const port = 3000;


app.use(cors()); // enables CORS for all routes, allowing requests from any origin
app.use(express.json()); // allows the server to understand incoming JSON data (like from POST requests)

app.use('/api', clientRoute); // mounts the client routes under the /api path

// Your server starts, It binds to port 3000, Express waits for incoming HTTP requests like GET, POST, etc
// Express method that tells your server to start listening for requests on a port.
app.listen(port, () => {
    console.log("listening on port 3000");
}); 

