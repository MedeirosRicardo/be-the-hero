const express = require('express');
const NgoController = require('./controllers/NgoCoNtroller');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Login
routes.post('/sessions', SessionController.create);

// NGO
routes.get('/ngo', NgoController.index);
routes.post('/ngo', NgoController.create);

// Profile
routes.get('/profile', ProfileController.index);

// Incident
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;