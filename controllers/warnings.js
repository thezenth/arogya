var express = require('express');
var router = express.Router();

// GET /results
router.get('/', function(req, res) {
  // Get warning message from query string
  var m = req.query.m.toString();
  console.log(m);
  res.render('warnings', { message: m });

}); // end router.get

// POST /results
/*
router.post('/', function(req, res) {

});
*/

module.exports = router;
