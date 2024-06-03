import express from 'express';
import passportAuth from '../authentication/passportAuth'
import cors from 'cors';
var router = express.Router();


// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: "http://gic-asenhoradosaneis.k3s",
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}



/* GET home page. */
router.get('/', cors(corsOptions), function(req, res, next) {
  res.render('index', { title: 'Veniqa Shopping Server' });
});

module.exports = router;
