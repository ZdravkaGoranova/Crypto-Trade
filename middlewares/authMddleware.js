const jwt = require('../lib/jsonWebToken.js');
const { SECRET } = require('../constans.js');

exports.authentication = async (req, res, next) => {

    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;

        } catch (err) {
            res.clearCookie('auth');

            return res.status(401).render('home/404');
        }
    }
    next();
};

exports.isAuth = async (req, res, next) => {

    if (!req.user) {
        res.redirect('/login');
    }


};