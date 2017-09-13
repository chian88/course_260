var MenuView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.menu,
  events: {
    "click a.add_cart": "addToCart",
    "click header": "displayItem"
  },
  displayItem: function(e) {
    e.preventDefault();
    router.navigate(String(this.model.get("id")), {trigger: true});
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("#items").append(this.$el);
  },
  initialize: function() {
    this.$el.attr('data-id', this.model.get("id"));
    this.render();
  }
})