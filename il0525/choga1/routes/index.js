const express = require('express');
const logger = require('../lib/logger');

const locateRouter = require('./locate');
const airInfoRouter = require('./airinfo');
const rankRouter = require('./rank');
const actRouter = require('./act');
const airRouter = require('./air');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

router.use('/locates', locateRouter);
router.use('/airinfos', airInfoRouter);
router.use('/ranks', rankRouter);
router.use('/acts', actRouter);
router.use('/airs', airRouter);

module.exports = router;
