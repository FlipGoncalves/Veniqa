import express from 'express';
import userController from '../controllers/userController';
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
    res.render('index', { title: 'Veniqa Users' });
});

router.use(passportAuth.isAuthenticated);

router.post('/address', cors(corsOptions), userController.addNewAddress);

router.get('/address', cors(corsOptions), userController.getAddresses);

router.put('/address', cors(corsOptions), userController.updateAddress);

router.delete('/address', cors(corsOptions), userController.deleteAddress);

router.post('/orderList', cors(corsOptions), userController.getOrderList);

router.get('/orderDetails', cors(corsOptions), userController.getOrderDetails);

module.exports = router;