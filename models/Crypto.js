const mongoose = require('mongoose');


const cryptoShema = new mongoose.Schema({

});


const Crypto = mongoose.model('Crypto', cryptoShema);

module.exports = Crypto;