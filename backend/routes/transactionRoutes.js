const express = require('express');
const router = express.Router();

// Rota de teste para transações
router.get('/', (req, res) => {
    res.send('Rota de transações funcionando!');
});

module.exports = router;
