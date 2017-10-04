var path = require('path'),
    Data = require(path.resolve(path.dirname(__dirname), "modules/data")),
    _ = require("underscore");

module.exports = function(router) {
  router.post('/cards', function(req, res) {
    var card = req.body,
        data = Data.get();

    var list_index = data.lists.findIndex(function(list_element) {
      return list_element.id === card.list_id;
    });

    var card_index = data.lists[list_index].cards.findIndex(function(card_element) {
      return card_element.id === card.id;
    });

    if (!card.labels) { card.labels = [] }
    if (!card.comments) { card.comments = [] }
    if (!card.due) { card.due = {} }

    data.lists[list_index].cards.push(card);

    Data.set(data);
    res.json(data);
  });

  router.put('/cards', function(req, res) {
    var card = req.body,
        data = Data.get();

    var list_index = data.lists.findIndex(function(list_element) {
      return list_element.id === card.list_id;
    });

    var card_index = data.lists[list_index].cards.findIndex(function(card_element) {
      return card_element.id === card.id;
    });

    if (!card.labels) { card.labels = [] }

    data.lists[list_index].cards[card_index] = card;
    Data.set(data);
    res.json(data);
  });

  router.delete('/cards', function(req, res) {
    var card = req.body,
        data = Data.get();

    var list_index = data.lists.findIndex(function(list_element) {
      return list_element.id === card.list_id;
    });

    var card_index = data.lists[list_index].cards.findIndex(function(card_element) {
      return card_element.id === card.id;
    });

    if (!card.labels) { card.labels = [] }

    data.lists[list_index].cards.splice(card_index, 1);

    Data.set(data);
    res.json(data);
  });
}