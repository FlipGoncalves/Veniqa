import express from 'express';
import passportAuth from '../authentication/passportAuth';
import referenceDataController from '../controllers/referenceDataController';
import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: config.get('allowed_origins'),
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}


/* GET Reference Data Endpoint. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Veniqa Reference Data' });
});

router.use(passportAuth.isAuthenticated);

router.get('/getCatalogBundle', cors(corsOptions), referenceDataController.getCatalogBundle);

router.get('/getStores', cors(corsOptions), referenceDataController.getStores);

router.get('/getRoles', cors(corsOptions), referenceDataController.getRoles);

router.get('/getWeightUnits', cors(corsOptions), referenceDataController.getWeightUnits);

router.get('/productCategoryList', cors(corsOptions), passportAuth.canViewCategories, referenceDataController.getProductCategoryList);

router.post('/productCategory', cors(corsOptions), passportAuth.canManageCategories, referenceDataController.addProductCategory);

router.get('/productCategory', cors(corsOptions), passportAuth.canViewCategories, referenceDataController.getProductCategory);

router.put('/productCategory', cors(corsOptions), passportAuth.canManageCategories, referenceDataController.updateProductCategory);

router.get('/tariffList', cors(corsOptions), passportAuth.canViewTariff, referenceDataController.getTariffList);

router.post('/tariff', cors(corsOptions), passportAuth.canManageTariff, referenceDataController.addTariffCategory);

router.get('/tariff', cors(corsOptions), passportAuth.canViewTariff, referenceDataController.getTariffCategory);

router.put('/tariff', cors(corsOptions), passportAuth.canManageTariff, referenceDataController.updateTariffCategory);

module.exports = router;