const router = require('express').Router();

const authService = require('../services/authServices.js');
const { isAuth } = require('../middlewares/authMddleware.js')
const { getErrorMessage } = require('../utils/errorUtils.js')

router.get('/login', (req, res) => {
    res.render('auth/login')
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/')
    } catch (error) {
        return res.status(404).render('auth/login', { error: getErrorMessage(error) });
    }
});


router.get('/register', (req, res) => {
    res.render('auth/register');

});
router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        const token = await authService.register(username, email, password, confirmPassword);

        //LOGIN automatically
        res.cookie('auth', token);
        res.redirect('/')
    } catch (error) {
        res.status(400).render('auth/register', { error: getErrorMessage(error) });
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');

});
//////:)

router.get('/create', (req, res) => {
    res.render('crypto/create');

});
router.post('/create', (req, res) => {
    const { name, image, price, description, payment } = req.body;




    res.redirect('/catalog')
});



router.get('/catalog', (req, res) => {
    res.render('crypto/catalog');

});

router.post('/catalog', (req, res) => {
    
});

router.get('/search', (req, res) => {
    res.render('home/search');

});


module.exports = router;
