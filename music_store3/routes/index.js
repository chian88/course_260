var path = require('path'),
    Albums = require(path.resolve(path.dirname(__dirname), "modules/albums"));

module.exports = function(router) {
  router.get('/', function(req, res) {
    res.render('index', { 
      albums: Albums.get()
    });
  });
}
