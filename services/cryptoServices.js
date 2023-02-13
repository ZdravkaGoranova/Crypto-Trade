const Crypto = require('../models/Crypto.js');

exports.getOne = (cryptoId) => Crypto.findById(cryptoId).lean();

exports.update = (cryptoId, data) => Crypto.findByIdAndUpdate(cryptoId, data, { runValidators: true });

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);
//????
// exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId, (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('-------');
//         console.log('User has been deleted.');
//     }
// });