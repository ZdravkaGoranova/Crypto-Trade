const router = require('express').Router();

const Crypto = require('../models/Crypto.js');
router.get('/', (req, res) => {
   // console.log(req.user)
    res.render('home/index')
});


router.get('/catalog', async (req, res) => {

    let cryptos = await Crypto.find().lean();
   // console.log(cryptos)
    // res.render('index', { cubes, search, difficultyFrom, diffficultyTo });
    res.render('crypto/catalog', { cryptos });

});
router.get('/search', (req, res) => {
    res.render('home/search');

});

module.exports = router;