import express from 'express';
import passportAuth from '../authentication/passportAuth';
import uiController from '../controllers/uiController.js';
import cors from 'cors';
var router = express.Router();



// To Allow cross origin requests originating from selected origins
var corsOptions = {
    origin: "*",
    methods: ['GET, POST, OPTIONS, PUT, DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
  }

  
  
/* GET UI Customziations Endpoint. */
router.get('/', cors(corsOptions), function(req, res, next) {
    res.render('index', { title: 'Veniqa User Interface Customizations' });
});

router.get('/featured', cors(corsOptions), uiController.getFeaturedSection);

router.get('/productCategoryList', cors(corsOptions), uiController.getProductCategoryList);

module.exports = router;