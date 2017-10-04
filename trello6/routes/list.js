var path = require('path'),
    Data = require(path.resolve(path.dirname(__dirname), "modules/data"));

module.exports = function(router) {
  router.post('/lists', function(req, res) {
    var list = req.body,
        data = Data.get();

    list.cards = [];

    data.lists.push(list);
    Data.set(data);
    res.json(list);
  }); 

  router.delete('/lists', function(req, res) {
    var info = req.body,
        data = Data.get();

    data.lists = data.lists.filter(function(list_element) {
      return list_element.id !== info.list_id;
    });

    Data.set(data);
    res.json(data);
  });   
}