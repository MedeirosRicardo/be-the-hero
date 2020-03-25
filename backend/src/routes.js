const express = require('express');
const ngoController = require('./controllers/ngoController');

const routes = express.Router();

// List all ngo
routes.get('/ngo', ngoController.index);

// Create ngo
routes.post('/ngo', ngoController.create);

module.exports = routes;