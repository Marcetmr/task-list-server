

// Importaciones y set-up inicial

const users = require('./users-array');

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

const { Router } = require('express');

const router = Router();

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

router.post('/', (req, res) => {
    const { email } = req.body;

    const user = users.find(u => u.email === email);

    if (user) {
        const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
        res.json(token);
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

// 

// Exportación del router

module.exports = router;