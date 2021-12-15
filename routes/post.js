const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/', (req, res) => {
    res.send('post');
})


module.exports = router;














// router.get('/specific', (req, res) => {
//     res.send('specific');
// })