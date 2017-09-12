var CheckoutView = Backbone.View.extend({
  attributes: {
    id: "content"
  },
  events: {
    "click a.cancel": "cancelOrder",
    submit: "cancelOrder",
    "click i.fa-minus": "decrement",
    "click i.fa-plus": "increment"
  },
  increment: function(e) {
    var id = $(e.currentTarget).closest("tr").attr("data-id"),
        cartItem = this.collection.get(id),
        quantity = cartItem.get("quantity");

    cartItem.set("quantity", quantity + 1);
    this.render();
  },
  decrement: function(e) {
    var id = $(e.currentTarget).closest("tr").attr("data-id"),
        cartItem = this.collection.get(id),
        quantity = cartItem.get("quantity");

    quantity -= 1;

    if (quantity === 0) {
      this.collection.remove(cartItem);
    } else {
      cartItem.set("quantity", quantity);         
    }
    this.render(); 
  },
  cancelOrder: function(e) {
    this.collection.trigger('empty_cart');
  },
  template: App.templates.checkout,
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    App.$el.find("#content").detach();
    App.$el.find("main").append(this.$el);
    // App.$el.find("main").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})