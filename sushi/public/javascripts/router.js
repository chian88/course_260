var router = new (Backbone.Router.extend({
  routes: { ":item_id": App.renderItemView },
  index: function() {  App.indexView(); },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});