var express = require('express');
var router = express.Router();

/* GET sponsors listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: "Sponsor 1",
    level: "Gold"
  });
});

module.exports = router;
