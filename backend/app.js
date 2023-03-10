const express = require('express');

const app = express();
const userRoutes = require('./userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);

module.exports = app;
