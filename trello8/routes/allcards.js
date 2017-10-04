var path = require('path'),
    Data = require(path.resolve(path.dirname(__dirname), "modules/data"));

module.exports = function(router) {
  router.post('/allcards', function(req, res) {
    var cards = req.body.cards,
        list_id = req.body.list_id,
        data = Data.get();

    var list_index = data.lists.findIndex(function(list_element) {
      return list_element.id === list_id;
    });

    data.lists[list_index].cards = cards;

    Data.set(data);
    res.json(cards);
  });  
}