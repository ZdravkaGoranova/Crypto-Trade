const router = require('express').Router();

const homeController = require('./controllers/homeController.js');

const authController = require('./controllers/authController.js');

const cryptoController = require('./controllers/cryptoController.js');

// const { isAuthenticated } = require('./middlewares/authMiddleware.js')
// const { handleRequest } = require('./utils/requestUtils.js')



router.use(homeController);
router.use(authController);//router.use('/auth',authController);

//router.use(cryptoController);
router.get('/create', cryptoController.getCreateCrypto);
router.post('/create', cryptoController.postCreateCrypto);




module.exports = router;