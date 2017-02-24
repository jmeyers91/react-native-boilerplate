const express = require('express');
const success = require('./utils/sendSuccess');
const fail = require('./utils/sendFail');
const router = express.Router();

router.get('/foo', (req, res) => {
  success(res, {foo: 'bar'});
});

router.use((error, req, res, next) => fail(res, error)); // error handler

module.exports = router;
