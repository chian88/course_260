var path = require('path'),
    Data = require(path.resolve(path.dirname(__dirname), "modules/data"));

module.exports = function(router) {
  router.post('/lists', function(req, res) {
    var list = req.body,
        data = Data.get();

    data.lists.push(list);
    Data.set(data);
    res.json(list);
  });  
}