var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    file_path = path.resolve(path.dirname(__dirname), "data/menu.json");

/* GET home page. */
function getMenus() {
  return JSON.parse(fs.readFileSync(file_path, "utf8"));
}

router.get('/', function(req, res, next) {
  res.render('index', { menus: getMenus() });
});

router.get('/:item', function(req, res, next) {
  res.render('index', { menus: getMenus() });
});

module.exports = router;
