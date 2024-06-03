import express from 'express';
import passportAuth from '../authentication/passportAuth';
import catalogController from '../controllers/catalogController';
import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: "http://gic-asenhoradosaneis.k3s",
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}



/* GET Catalog Endpoint. */
router.get('/', cors(corsOptions), function(req, res, next) {
  res.render('index', { title: 'Veniqa Curated Catalog' });
});




router.route('/search',cors(corsOptions) ).post(catalogController.searchCatalog)

router.route('/getProductDetails', cors(corsOptions)).get(catalogController.getProductDetails);

module.exports = router;