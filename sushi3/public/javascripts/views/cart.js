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
    router.navigate("checkout", {trigger: true});
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

    var exist = App.$el.find("#cart");
    if (exist.length) {
      App.$el.find("#cart").html(this.$el.html());
    } else {
      App.$el.find("main").prepend(this.$el);
      this.$el.slideDown();      
    }

  },
  unRender: function() {
    App.$el.find("#cart").slideUp(400, function(){
      this.remove();
    });
  },
  initialize: function() {
    if (this.collection.length) { this.render(); }
    this.listenTo(this.collection, "cart_updated", this.render);
  }
})