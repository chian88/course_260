var express = require('express'),
    router = express.Router(),
    path = require('path'),
    fs = require('fs'),
    file_path = path.resolve(path.dirname(__dirname), "data/lists.json");


function getLists() {
  var data = JSON.parse(fs.readFileSync(file_path, "utf8")); 
  return JSON.parse(fs.readFileSync(file_path, "utf8"));
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { lists: getLists() });

});

module.exports = router;
