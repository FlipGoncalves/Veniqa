import express from 'express';
import passportAuth from '../authentication/passportAuth'
import superAdminController from '../controllers/superAdminController';

import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: config.get('allowed_origins'),
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

/* GET home page. */
router.get('/', cors(corsOptions), function(req, res, next) {
  res.render('index', { title: 'Veniqa Bossman' });
});

router.use(passportAuth.isAuthenticated);
router.use(passportAuth.isSuperAdmin);

router.post('/createAdmin', cors(corsOptions), superAdminController.createAdmin);

router.get('/getAllAdmins', cors(corsOptions), superAdminController.getAllAdmins);

router.get('/getAdminDetails', cors(corsOptions), superAdminController.getAdminDetails);

router.put('/updateAdminAccess', cors(corsOptions), superAdminController.updateAdminAccess);

router.delete('/deleteAdmin', cors(corsOptions), superAdminController.deleteAdmin);

module.exports = router;