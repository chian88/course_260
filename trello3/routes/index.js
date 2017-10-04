var path = require('path'),
    Data = require(path.resolve(path.dirname(__dirname), "modules/data"));

module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { 
      lists: Data.get().lists,
      cards: Data.get().cards,
      colors: Data.get().existingColors 
    });
  });  
}