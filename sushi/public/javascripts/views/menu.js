var MenuView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.menu,
  events: {
    "click a.add_cart": "addToCart",
    "click header": "displayItem"
  },
  displayItem: function(e) {
    var id = +$(e.target).closest('li').attr('data-id');
    router.navigate(String(id), {trigger: true});
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  render: function() {
    var id = this.model.get('id');
    this.$el.attr("data-id", id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("ul#items"));
  },
  initialize: function() {
    this.render();
  }
});