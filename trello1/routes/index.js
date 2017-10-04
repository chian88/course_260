var path = require('path'),
    Lists = require(path.resolve(path.dirname(__dirname), "modules/lists")),
    Colors = require(path.resolve(path.dirname(__dirname), "modules/colors"));

/* GET home page. */

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', { 
      lists: Lists.get(),
      colors: Colors.get() 
    });

  });  
}
