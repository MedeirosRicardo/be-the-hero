const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.json({
        event: 'Semana OmniStack 11.0',
        user: 'Ricardo Medeiros'
    });
});