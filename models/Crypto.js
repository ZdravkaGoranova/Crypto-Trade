const mongoose = require('mongoose');

const cryptoShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image:
    {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cryptoDescription: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    } //String(crypto - wallet, credit - card, debit - card, paypal) required,
    // buyaCrypto - a collection of Users(a reference to the User model)
    // owner - object Id(a reference to the User model)

});


const Crypto = mongoose.model('Crypto', cryptoShema);

module.exports = Crypto;