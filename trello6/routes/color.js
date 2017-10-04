var path = require('path'),
    Data = require(path.resolve(path.dirname(__dirname), "modules/data")),
    _ = require("underscore");

module.exports = function(router) {
  router.put('/colors', function(req, res) {
    var color = req.body,
        data = Data.get();

    var index = data.existingColors.findIndex(function(color_element) {
      return color_element.id === color.id;
    });

    data.existingColors[index] = color;

    Data.set(data);
    res.json(data);
  });

  router.delete('/colors', function(req, res) {
    var info = req.body,
        data = Data.get();

    data.existingColors = data.existingColors.filter(function(color_element) {
      return color_element.id !== info.id;
    });

    Data.set(data);
    res.json(data);
  });

  router.post('/colors', function(req, res) {
    var info = req.body,
        data = Data.get();

    data.existingColors.push(info);

    Data.set(data);
    res.json(data);    
  })
}