var IndexView = Backbone.View.extend({
  attributes: {
    id: "content"
  },
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template());
    App.$el.find("main").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});