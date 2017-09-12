var App = {
  indexView: function() {
    this.index = new IndexView();
    this.renderMenus();
    this.createCart();
    this.header = new HeaderView({
      collection: this.cart
    });
    this.bindEvents();
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    });
  },
  renderItemView: function(item_id) {
    menu = App.menus.get(+item_id);
    new ItemView({
      model: menu
    });
  },
  renderCheckoutView: function() {
    this.cart = new CartItems();
    new CheckoutView({
      collection: this.cart
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("add_to_cart", this.cart.addItem.bind(this.cart));
  },
  renderMenus: function() {
    this.menus.each(this.renderMenu);
  },
  renderMenu: function(menuItem) {
    new MenuView({
      model: menuItem
    });
  },
  templates: JST,
  $el: $(document.body),
}