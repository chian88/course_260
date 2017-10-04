var _ = require('underscore'),
    path = require('path'),
    Colors = require(path.resolve(path.dirname(__dirname), "modules/colors"));

module.exports = function(router) {
  router.route('/colors').get(function(req, res) {
    res.json(Colors.get())
  }).post(function(req, res) {
    var color = req.body,
        colors = Colors.get();
    colors.push(color);
    Colors.set(colors);
  }).put(function(req, res) {

  }).delete(function(req, res) {

  })
}