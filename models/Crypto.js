const mongoose = require('mongoose');

const cryptoShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: [2, 'Name should be at least two characters!'],
    },
    image:
    {
        type: String,
        required: true,
        match: [/^http[s]?:\/\//, 'Invalid URL'],
        // http / httpsvalidation 

    },
    price: {
        type: Number,
        required: true,
        //•	The Price should be a positive number
    },
    description: {
        type: String,
        required: true,
        minLenght: [10, 'Description should be a minimum of 10 characters long!'],
    },
    paymentMethod: {
        type: String,
        required: true,
    },

    // buyaCrypto - a collection of Users(a reference to the User model)
    //?????????????
    // buy: {
    //     type: mongoose.Types.Array,
    //     ref: 'User'
    // },

    // owner - object Id(a reference to the User model)
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});


const Crypto = mongoose.model('Crypto', cryptoShema);

module.exports = Crypto;