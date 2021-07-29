// app.js

const http = require('http');

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Start the server on port 3000
app.listen(8080);
console.log('Node server running on port 8080');