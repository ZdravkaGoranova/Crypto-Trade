const router = require('express').Router();

const authService = require('../services/authServices.js');


router.get('/login', (req, res) => {
    res.render('auth/login')
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    await authService.login(email, password);

    const token = await authService.login(email, password);


    res.redirect('/');
});


router.get('/register', (req, res) => {
    res.render('auth/register');

});
router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    await authService.register(username, email, password, confirmPassword);

    res.redirect('/');
});

module.exports = router;
