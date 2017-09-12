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

// $(document.body).on("click", "i.fa-minus", function(e) {
//   App.checkout.decrement(e);
// });

// $(document.body).on("click", "i.fa-plus", function(e) {
//   App.checkout.increment(e);
// });