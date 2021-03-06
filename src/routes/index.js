const express = require('express');
const router = express.Router();

const indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.home);

/* GET detail page */

router.get('/detail', indexController.detail);

router.get('/callback', indexController.callback)

router.post('/webhooks', indexController.notifications)

/* Pagar por POST */

router.post('/comprar', indexController.comprar);

module.exports = router;
