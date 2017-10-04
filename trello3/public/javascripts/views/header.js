var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  el: "#title_bar",
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
})