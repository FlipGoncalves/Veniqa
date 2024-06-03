import express from 'express';
import passportAuth from '../authentication/passportAuth';
import catalogController from '../controllers/catalogController';
import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: config.get('allowed_origins'),
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

/* GET Catalog Endpoint. */
router.get('/', cors(corsOptions), function(req, res, next) {
  res.render('index', { title: 'Veniqa Curated Catalog' });
});

router.use(passportAuth.isAuthenticated);

router.post('/search', cors(corsOptions), passportAuth.canViewCatalog, catalogController.searchCatalog);

router.post('/addProduct', cors(corsOptions), passportAuth.canManageCatalog, catalogController.addProductToCatalog);

router.get('/getProductDetails', cors(corsOptions), passportAuth.canViewCatalog, catalogController.getProductDetails);

router.put('/updateProduct', cors(corsOptions), passportAuth.canManageCatalog, catalogController.updateProductInCatalog);

router.delete('/deleteProduct', cors(corsOptions), passportAuth.canManageCatalog, catalogController.deleteProductFromCatalog);

router.get('/getPresignedUrlsForCatalogImageUploads', cors(corsOptions), passportAuth.canManageCatalog, catalogController.getPresignedUrlsForCatalogImageUploads);

module.exports = router;