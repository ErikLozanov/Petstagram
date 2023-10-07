const router = require('express').Router();

const homeController = require('./controllers/homeController');
// TODO: add controller routes

router.use(homeController);

module.exports = router;