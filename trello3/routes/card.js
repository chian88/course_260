var path = require('path'),
    Data = require(path.resolve(path.dirname(__dirname), "modules/data")),
    _ = require("underscore");

module.exports = function(router) {
  router.post('/cards', function(req, res) {
    var card = req.body,
        data = Data.get();


    data.cards.push(card);
    Data.set(data);
    res.json(data);
  });

  router.put('/cards', function(req, res) {
    var card = req.body,
        data = Data.get();

    var index = data.cards.findIndex(function(card_element) {
      return card_element.card_id === card.card_id && card_element.list_id === card.list_id;
    });


    data.cards[index] = card;

    Data.set(data);
    res.json(data);
  });
}