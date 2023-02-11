const User = require('../models/User.js');

const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonWebToken.js');
const SECRET = 'Somesecretsecret';

exports.findByUsername = (username) => User.findOne({ username });//User.exists({username})
exports.findByEmail = (email) => User.findOne({ email });//User.exists({email})

exports.register = async (username, email, password, confirmPassword) => {

    if (password !== confirmPassword) {
        throw new Error('Password missmatc!');
    }

    //TODO:Check user exists
    const existingUser = await this.findByUsername(username);
    // User.findOne({
    //     $or: [
    //         { email },
    //         { username }
    //     ]
    // });

    if (existingUser) {
        throw new Error('User  exists!');
    }

    //TODO:Validate password колко дълга ,симшоли език,гл .букви
    if (password.lenght < 4) {
        throw new Error('The password should be at least four characters long!');
    }


    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashPassword });
};


exports.login = async (email, password) => {

    //Email/User exist
    const user = await this.findByEmail(email);
    if (!user) {
        throw new Error('Invalid email or password!');
    }

    //Password is valid
    const isValid = await bcrypt.compare(user.password, password);
    if (!isValid) {
        throw new Error('Invalid email or password!');
    };

    //Generated token
    const payload = {
        _id: user._id,
        email,
        username: user.username,
    };

    const token = await jwt.sing(payload, SECRET);

    return token;
}

