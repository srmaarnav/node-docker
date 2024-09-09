const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use USER_NAME from .env if available, otherwise fallback to server's hostname
const userName = process.env.USER_NAME || "Guest";

app.get('/', (req, res) => {
  res.send("Hello World !! \n");
});

app.get('/name', (req, res) => {
  res.send(`Hello, ${userName}!! \n`);	
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
