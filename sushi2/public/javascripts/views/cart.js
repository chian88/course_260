var CartView = Backbone.View.extend({
  template: App.templates.cart,
  attributes: {
    id: "cart"
  },
  events: {
    "click a.checkout": "checkout"
  },
  checkout: function(e) {
    e.preventDefault();
    router.navigate("checkout", {trigger: true})
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    App.$el.find("#cart").remove();
    App.$el.find("main").prepend(this.$el);
    this.$el.slideDown(300);
  },
  initialize: function() {
    if (this.collection.length) { this.render(); }
    this.listenTo(this.collection, "cart_updated", this.render);
  }
});