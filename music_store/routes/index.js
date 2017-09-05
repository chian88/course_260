var path = require('path'),
    file_path = path.resolve(path.dirname(__dirname), "data/albums.json"),
    Albums = require(path.resolve(path.dirname(__dirname), "modules/albums"));

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      albums: Albums.get()
    });
  });
}
