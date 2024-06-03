import express from 'express';
import orderController from '../controllers/orderController';
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



/* GET ORDERS Endpoint. */
router.get('/', cors(corsOptions), function(req, res, next) {
    res.render('index', { title: 'Veniqa Orders' });
});

router.use(passportAuth.isAuthenticated);

router.post('/createCheckout', cors(corsOptions), orderController.createCheckout);

router.post('/completeCheckoutUsingCard', cors(corsOptions), orderController.completeCheckoutUsingCard);

router.post('/completeCheckoutUsingKhalti', cors(corsOptions), orderController.completeCheckoutUsingKhalti);

router.get('/isCheckoutValid', cors(corsOptions), orderController.isCheckoutValid);

router.post('/createPaymentToken', cors(corsOptions), orderController.createPaymentToken);

router.post('/completeCheckout', cors(corsOptions), orderController.completeCheckout);

router.post('/stripePaymentInstant', cors(corsOptions), orderController.stripePaymentInstant);

router.post('/completeCheckoutUsingStripePaymentInstant', cors(corsOptions), orderController.completeCheckoutUsingStripePaymentInstant);

module.exports = router;