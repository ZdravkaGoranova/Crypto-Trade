
const Crypto = require('../models/Crypto.js');

const cryptoService = require('../services/cryptoServices.js');
const cryptoUtils = require('../utils/cryptoUtils.js');

exports.getCreateCrypto = (req, res) => {
    console.log(req.user);

    res.render('crypto/create');
};
exports.postCreateCrypto = async (req, res) => {
    // console.log(req.body);//Object на данните от url
    console.log(req.user);

    try {
        //save cube
        const { name, image, price, description, paymentMethod } = req.body;

        let crypto = new Crypto({
            name,
            image,
            price,
            description,
            paymentMethod,
            owner: req.user._id,
        });
        console.log(crypto);
        await crypto.save();//запазва в db

    } catch (err) {
        console.log(err.message);
        return res.render('auth/404');
    }
    //redirect
    res.redirect('/catalog');
};