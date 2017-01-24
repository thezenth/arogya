var express = require('express');
var router = express.Router();

router.use('/meals', require('./meals'));
router.use('/symptoms', require('./symptoms'));
router.use('/warnings', require('./warnings'));

/* GET home page. */
router.get('/', function(req, res) {
  //req.io.sockets.emit('echo', 'THIS IS THE SERVER');
  res.render('index', { title: 'Arogya' });
});

module.exports = router;
