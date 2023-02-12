const mongoose = require('mongoose');


const userShema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLenght: 5,
    },
    email: {
        type: String,
        required:  [true, 'Email is required!'],
        minLenght: 10,
    },
    password: {
        type: String,
        required:  [true, 'Password is required!'],
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