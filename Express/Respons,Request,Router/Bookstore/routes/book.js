const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('📘 Book Section Home');
});

router.get('/about',(req,res) => {
    res.send('📘 About our books');
});

router.get('/details/:bookId',(req,res) => {
    res.send(`📘 Details for book with ID: ${req.params.bookId}`);
});

module.exports = router;