var express = require('express');
var router = express.Router();

/* GET meals page. */
router.get('/', function(req, res) {
  res.render('symptoms', { title: 'Arogya' });
});

module.exports = router;
