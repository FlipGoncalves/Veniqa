import express from 'express';
import shoppingController from '../controllers/shoppingController';
import passportAuth from '../authentication/passportAuth';
import cors from 'cors';
var router = express.Router();

// To Allow cross origin requests originating from selected origins
var corsOptions = {
    origin: "http://gic-asenhoradosaneis.k3s",
    methods: ['GET, POST, OPTIONS, PUT, DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }


/* GET Amazon Endpoint. */
router.get('/', cors(corsOptions), function(req, res, next) {
    res.render('index', { title: 'Veniqa Shopping' });
});

router.use(passportAuth.isAuthenticated);

router.post('/addToCart', cors(corsOptions), shoppingController.addToCart);

router.get('/getCart', cors(corsOptions), shoppingController.getCart);

router.put('/updateCart', cors(corsOptions), shoppingController.updateCart);

router.delete('/deleteFromCart', cors(corsOptions), shoppingController.deleteFromCart);

module.exports = router;