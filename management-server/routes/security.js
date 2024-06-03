import express from 'express';
import securityController from '../controllers/securityController';
import passport from 'passport';
import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: config.get('allowed_origins'),
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}
/* GET Amazon Endpoint. */
router.get('/', cors(corsOptions), function(req, res, next) {
    res.render('index', { title: 'Veniqa Security' });
});

router.route('/login', cors(corsOptions)).post(passport.authenticate('login'), securityController.login);

router.get('/isLoggedIn', cors(corsOptions), (req, res, next) => {
    return res.status(200).send(req.isAuthenticated())
});

router.route('/logout', cors(corsOptions)).get(securityController.logout);

router.route('/forgotPassword', cors(corsOptions)).get(securityController.forgotPassword);

router.route('/validatePasswordResetToken/:token', cors(corsOptions)).get(securityController.validatePasswordResetToken);

router.route('/resetPassword', cors(corsOptions)).post(securityController.resetPassword);

module.exports = router;