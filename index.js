const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

// Middleware
app.use(helmet());
app.use(morgan("common"));

// MongoDB connection
mongoose.connect("mongodb+srv://is1384:Suntour1974@cluster0.gfu7x5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

// Start server
app.listen(3000, () => {
    console.log("Backend is running on port 3000!");
});
