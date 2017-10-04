var _ = require('underscore'),
    path = require('path'),
    Lists = require(path.resolve(path.dirname(__dirname), "modules/lists"));

module.exports = function(router) {
  router.route('/lists').get(function(req, res) {
    res.json(Lists.get())
  }).post(function(req, res) {

  }).put(function(req, res) {

  }).delete(function(req, res) {

  })
}