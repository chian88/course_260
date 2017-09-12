Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
})


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

$(document.body).on("click", "a.empty_cart", function() {
  App.cart.view.emptyCart();
});

