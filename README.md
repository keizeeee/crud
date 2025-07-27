# crud

## Prerequisites
Ensure you have the following installed:
- **Node.js**
- **daisyUI**
- **PostgreSQL**
- **pgAdmin**


---

## Frontend
Open the terminal and install
```sh
npm create vite@latest
cd crud-frontend
npm install
npm run dev
```

## Backend
```sh
mkdir crud-backend
cd crud-backend
```
Create "index.js" the main entry file for backend


Initialize Node.js project
```sh
npm init -y
```

Install Core Dependencies
- **Express** for HTTP server
- **Dotenv** for environment variable management
- **Nodemon** for automatic server restarts in development
- **Cors** to handle cross-origin requests

```sh
npm install express
npm install dotenv
npm install --save-dev nodemon
npm install cors
```

Add ES Module Support:
In package.json, add "type": "module" to allow import statements instead of require:
json

Add Services, Routes, Controllers Folder

Set Up Basic Server
```sh
// backend/index.js
import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clients.js'; // Import client routes
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON
// Set up routes
app.use('/api/clients', clientRoutes);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

```