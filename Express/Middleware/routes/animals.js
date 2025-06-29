const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    console.log('--- Animals router middleware ---');
    next();
});

router.get('/',(req,res) => {
    res.send('Welcome to the Animals home page!');
});

router.get('/about',(req,res) => {
    res.send('All about animals.');
});

module.exports = router;