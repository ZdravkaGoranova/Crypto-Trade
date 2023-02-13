const router = require('express').Router();

const homeController = require('./controllers/homeController.js');

const authController = require('./controllers/authController.js');

const cryptoController = require('./controllers/cryptoController.js');

const { isAuth } = require('./middlewares/authMddleware.js')
// const { handleRequest } = require('./utils/requestUtils.js')



router.use(homeController);
router.use(authController);//router.use('/auth',authController);

//router.use(cryptoController);
router.get('/create', isAuth, cryptoController.getCreateCrypto);
router.post('/create', isAuth, cryptoController.postCreateCrypto);

router.get('/cryptos/:cryptoId/details', cryptoController.getDetails);

router.get('/cryptos/:cryptoId/edit', isAuth, cryptoController.getEditCrypto);


// router.get('/cubes/:cubeId/details', handleRequest(cubeControler.getDetails));//път към детайла
// router.get('/cubes/:cubeId/edit', isAuthenticated, handleRequest(cubeControler.getEditCube));
// router.post('/cubes/:cubeId/edit', handleRequest(cubeControler.postEditCube));


router.get('/cryptos/:cryptoId/delete', isAuth, cryptoController.getDeleteCrypto);




module.exports = router;