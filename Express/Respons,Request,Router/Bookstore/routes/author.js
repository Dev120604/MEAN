const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('🖋️ Author Section Home');
});

router.get('/about',(req,res) => {
    res.send('🖋️ About our authors')
});

module.exports = router;