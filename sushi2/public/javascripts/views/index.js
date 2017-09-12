var IndexView = Backbone.View.extend({
  template: App.templates.index,
  attributes: { id: "content" },
  render: function() {
    this.$el.html(this.template());
    App.$el.find("main").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})