var CheckoutView = Backbone.View.extend({
  attributes: {
    class: "checkout"
  },
  events: {
    "click i.fa-minus": "reduce",
    "click i.fa-plus": "increase"
  },
  reduce: function(e) {
    e.preventDefault();
    var id = +$(e.target).closest("tr").attr("data-id"),
        cart_item = this.collection.get(id),
        quantity = cart_item.get("quantity");

    quantity -= 1;

    if (quantity === 0) { 
      this.collection.remove(cart_item)
    } else {
      cart_item.set("quantity", quantity);
    }
    this.collection.update()
    this.collection.updateStorage();
    App.trigger("renderCheckoutView");
  },
  increase: function(e) {
    e.preventDefault();

    var id = +$(e.target).closest("tr").attr("data-id"),
        cart_item = this.collection.get(id),
        quantity = cart_item.get("quantity");

    quantity += 1;

    cart_item.set("quantity", quantity);

    this.collection.update()
    this.collection.updateStorage();
    this.render();
  },
  template: App.templates.checkout,
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));

    App.$el.find("#content").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})