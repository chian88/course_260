var CartView = Backbone.View.extend({
  template: App.templates.cart,
  attributes: {
    id: "cart"
  },
  emptyCart: function() {
    this.collection.trigger("empty_cart");
    this.unRender();
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    App.$el.find("main").prepend(this.$el);
    this.$el.slideDown();
  },
  unRender: function() {
    App.$el.find("#cart").slideUp();
  },
  initialize: function() {
    if (this.collection.length) { this.render(); }
    this.listenTo(this.collection, "cart_updated", this.render);
  }
})