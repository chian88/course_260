var router = new (Backbone.Router.extend({
  routes: { 
    "checkout": App.renderCheckoutView.bind(App),
    ":item_id": App.renderItemView
  },
  index: function() {  App.indexView(); },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});