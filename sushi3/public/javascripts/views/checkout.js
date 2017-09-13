var CheckoutView = Backbone.View.extend({
  template: App.templates.checkout,
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
    var id = $(e.currentTarget).closest("tr").attr("data-id");

    this.collection.trigger("increment", id);
    this.render();
  },
  decrement: function(e) {
    var id = $(e.currentTarget).closest("tr").attr("data-id");

    this.collection.trigger("decrement", id);
    this.render(); 
  },
  cancelOrder: function(e) {
    e.preventDefault();
    this.collection.trigger('empty_cart');
    router.navigate("/", { trigger: true });
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    App.$el.find("#content").detach();
    App.$el.find("main").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})