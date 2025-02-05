const express = require('express');
const router = express.Router();

// Rota de teste
router.get('/login', (req, res) => {
    res.send('Rota de login funcionando!');
});

module.exports = router;
