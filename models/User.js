const mongoose = require('mongoose');


const userShema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLenght: 5,
    },
    email: {
        type: String,
        required: true,
        minLenght: 10,
    },
    password: {
        type: String,
        required: true,
        minLenght: 4,
    },
    // }, {
    //     virtuals: {
    //         confirmPassword: {
    //             set(value) {
    //                 if (this.password !== value) {
    //                     throw new mongoose.Error('Password missmatch!');
    //                 }
    //             }
    //         }
    //     }

});

//userShema.virtual('confirmPassword').set;

const User = mongoose.model('User', userShema);

module.exports = User;