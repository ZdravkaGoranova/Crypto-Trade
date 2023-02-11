const mongoose = require('mongoose');

const cryptoShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght:2,
    },
    image:
    {
        type: String,
        required: true,
        //•	The Crypto Image should start with http:// or https://.
    },
    price: {
        type: Number,
        required: true,
        //•	The Price should be a positive number
    },
    cryptoDescription: {
        type: String,
        required: true,
        minLenght:10,//•	The Description should be a minimum of 10 characters long.
    },
    paymentMethod: {
        type: String,
        required: true,
        //•	The Payment Method must be one of the options
    }
     //String(crypto - wallet, credit - card, debit - card, paypal) required,
    // buyaCrypto - a collection of Users(a reference to the User model)
    // owner - object Id(a reference to the User model)

});


const Crypto = mongoose.model('Crypto', cryptoShema);

module.exports = Crypto;