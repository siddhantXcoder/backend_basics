const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware for the entire application
app.use(express.json());

// Define your router
const blogRouter = require('./routes/blog');

// Mount the router
app.use("/api/v1", blogRouter);

const connectWithDB = require("./config/database");
connectWithDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server started successfully at port ${PORT}`);
});

// Define other routes or middleware after mounting the router
app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});
