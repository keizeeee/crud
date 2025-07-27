import express from 'express';
//creates Express application object
const app = express();
const port = 3000;

// when someone makes an HTTP GET request to the / (root) path, respond with this HTML.
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// Your server starts, It binds to port 3000, Express waits for incoming HTTP requests like GET, POST, etc
app.listen(port, () => {
    console.log("listening on port 3000");
}); 

