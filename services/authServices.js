const User = require('../models/User.js');

const bcrypt = require('bcrypt');

exports.register = async (username, email, password, confirmPassword) => {

    if (password !== confirmPassword) {
        throw new Error('Password missmatc!');
    }

    //TODO:Validate password колко дълга ,симшоли език,гл .букви

    if (password.lenght < 4) {
        throw new Error('The password should be at least four characters long!');
    }


    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashPassword });


}

