const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    // List all ngo
    async index(req, res) {
        const ngo = await connection('ngotable').select('*');
        return res.json(ngo);
    },

    // Create ngo
    async create(req, res) {
        const { name, email, phone, city, state } = req.body;

        // Generate ID
        const id = crypto.randomBytes(4).toString('HEX');

        // Connect to database
        await connection('ngotable').insert({
            id,
            name,
            email,
            phone,
            city,
            state,
        })

        return res.json({ id });
    }
};