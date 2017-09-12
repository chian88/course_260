var ItemView = Backbone.View.extend({
  attributes: {
    id: "item_details"
  },
  events: {
    "click .prev": "prevItem",
    "click .next": "nextItem",
    "click .add_cart": "add_to_cart"
  },
  add_to_cart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  prevItem: function(e) {
    var id = +this.model.get("id");
    if (id > 1) { id -= 1; }
    App.renderItemView(id);
  },
  nextItem: function(e) {
    var id = +this.model.get("id");
    if (id < 18) { id += 1; }
    App.renderItemView(id);
  },
  template: App.templates.item,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("#content").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})