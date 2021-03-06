var CartItems = Backbone.Collection.extend({
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity; 
    }, 0);
    return this;
  },
  getTotal: function() { return this.total; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity; 
    }, 0);
    return this;
  },
  getQuantity: function() { return this.quantity; },
  readStorage: function() {
    var stored_cart = JSON.parse(localStorage.getItem("cart"));
    this.reset(stored_cart);
    this.setTotal().setQuantity();
  },
  getCount: function() {
    return this.length;
  },
  updateStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  addItem: function(item) {
    var existing = this.get(item.get('id'));

    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      existing = item.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }
    this.update();
  },
  emptyCart: function() {
    this.reset();
    this.update();
  },
  increment: function(id) {
    var cartItem = this.get(id),
        quantity = cartItem.get("quantity");

        cartItem.set("quantity", quantity + 1);
        this.update();
  },
  decrement: function(id) {
    var cartItem = this.get(id),
        quantity = cartItem.get("quantity");

    quantity -= 1;

    if (quantity === 0) {
      this.remove(cartItem);
    } else {
      cartItem.set("quantity", quantity);         
    }
    this.update();
  },
  update: function() {
    this.setTotal().setQuantity().updateStorage();
    this.trigger('cart_updated');
  },
  initialize: function() {
    this.readStorage();
    this.on("empty_cart", this.emptyCart);
    this.on("increment", this.increment);
    this.on("decrement", this.decrement);
  }
})