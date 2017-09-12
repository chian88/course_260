var CartView = Backbone.View.extend({
  template: App.templates.cart,
  tagName: "ul",
  attributes: {
    id: "cart"
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    App.$el.find("#index").prepend(this.$el);
    this.$el.slideDown(300);

  },
  initialize: function() {
    if (this.collection.length) { this.render(); }
    this.listenTo(this.collection, "cart_updated", this.render);
  }
});