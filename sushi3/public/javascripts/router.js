var router = new (Backbone.Router.extend({
  index: function() {
    App.indexView();
  },
  routes: {
    "checkout": App.checkoutView.bind(App),
    ":item_id": App.itemView.bind(App)
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index)
  }
}))();


Backbone.history.start({
  pushState: true
});

