var App = {
  indexView: function() {
    new IndexView();
    this.renderMenus();
    this.createCart();
    this.renderHeader();
    this.bindEvents();
  },
  renderHeader: function() {
    new HeaderView({
      collection: this.cart
    })
  },
  itemView: function(item_id) {
    var menu = this.menus.get(item_id);
    new ItemView({ 
      model: menu,
      collection: this.menus
    });
    this.renderHeader();
    this.cart.view.initialize();
  },
  checkoutView: function() {
    this.cart = new CartItems();
    this.renderHeader();
    new CheckoutView({
      collection: this.cart
    });
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    });
  },
  renderMenus: function() {
    this.menus.each(this.renderMenuView);
  },
  renderMenuView: function(menu) {
    new MenuView({ model: menu });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("add_to_cart", this.cart.addItem.bind(this.cart));
    this.on("display_item", this.itemView);
  },
  templates: JST,
  $el: $(document.body)
}

$(document.body).on("click", "a.empty_cart", function(e) {
  e.preventDefault();
  App.cart.view.emptyCart();
});

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
})
