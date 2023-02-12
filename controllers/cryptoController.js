
const router = require('express').Router();

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

exports.getDetails = async (req, res) => {

    //const crypto = await Crypto.findById(req.params.cryptoId).lean();
    //(cryptoId) => Crypto.findById(cryptoId).lean();

    const crypto = await cryptoService.getOne(req.params.cryptoId)

    if (!crypto) {
        return res.redirect('/404');
    }

    console.log(req.user._id);
    // console.log(req.params);
    // console.log(req.params.cryptoId);

    // console.log(`=========================================`)
    // console.log(crypto.owner.toString())

    const isOwner = cryptoUtils.isOwner(req.user, crypto);
   // console.log(isOwner)

    res.render('crypto/details', { crypto, isOwner});

};
