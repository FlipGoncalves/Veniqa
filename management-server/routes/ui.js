import express from 'express';
import passportAuth from '../authentication/passportAuth';
import uiController from '../controllers/uiController.js';
import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: config.get('allowed_origins'),
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

/* GET UI Customizations Endpoint. */
router.get('/', cors(corsOptions), function(req, res, next) {
    res.render('index', { title: 'Veniqa User Interface Customizations' });
});

router.use(passportAuth.isAuthenticated);

router.post('/featured', cors(corsOptions), passportAuth.canManageFeatured, uiController.updateOrUpsertFeaturedSection);

router.get('/featuredList', cors(corsOptions), passportAuth.canViewFeatured, uiController.getAllFeaturedSections);

router.get('/featured', cors(corsOptions), passportAuth.canViewFeatured, uiController.getFeaturedSection);

router.delete('/featured', cors(corsOptions), passportAuth.canManageFeatured, uiController.deleteFeaturedSection);

module.exports = router;