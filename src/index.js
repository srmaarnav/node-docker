require('dotenv').config(); 

// Import the Express module
const express = require('express');
const mysql = require('mysql2');


// Create an Express application
const app = express();


// Create a MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Try to connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Database connected successfully.');
});



// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello, World! It is donw');
});

const name = process.env.NAME || 'Guest'; 

app.get('/name', (req, res) => {
    res.send(`My name is ${name}`);
});


// Start the server on port 3000
const PORT = process.env.PORT||3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

