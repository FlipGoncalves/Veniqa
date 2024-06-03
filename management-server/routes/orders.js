import express from 'express';
import orderController from '../controllers/orderController';
import passportAuth from '../authentication/passportAuth';
import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: config.get('allowed_origins'),
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

router.use(passportAuth.isAuthenticated);

router.get('/', cors(corsOptions), function(req, res, next) {
    res.render('index', { title: 'Veniqa Orders' });
});

router.post('/orderList', cors(corsOptions), passportAuth.canViewOrders, orderController.getOrderList);

router.get('/order', cors(corsOptions), passportAuth.canViewOrders, orderController.getOrderDetails);

router.post('/confirmOrder', cors(corsOptions), passportAuth.canManageOrders, orderController.confirmOrder);

router.post('/cancelOrder', cors(corsOptions), passportAuth.canManageOrders, orderController.cancelOrder);

router.post('/markItemAsFulfilling', cors(corsOptions), passportAuth.canManageOrders, orderController.markItemAsFulfilling);

router.post('/markItemAsShipped', cors(corsOptions), passportAuth.canManageOrders, orderController.markItemAsShipped);

router.post('/markItemAsDelivered', cors(corsOptions), passportAuth.canManageOrders, orderController.markItemAsDelivered);

router.put('/updateOrderFulfillmentDetails', cors(corsOptions), passportAuth.canManageOrders, orderController.updateOrderFulfillmentDetails);

router.put('/updateShipmentDetails', cors(corsOptions), passportAuth.canManageOrders, orderController.updateShipmentDetails);

router.put('/updateDeliveryDetails', cors(corsOptions), passportAuth.canManageOrders, orderController.updateDeliveryDetails);

router.post('/addComment', cors(corsOptions), passportAuth.canManageOrders, orderController.addComment);

router.put('/editComment', cors(corsOptions), passportAuth.canManageOrders, orderController.editComment);

router.delete('/deleteComment', cors(corsOptions), passportAuth.canManageOrders, orderController.deleteComment);

module.exports = router;