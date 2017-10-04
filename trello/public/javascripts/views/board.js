var BoardView = Backbone.View.extend({
  template: App.templates.board,
  $el: $(document.body),
  render: function() {
    App.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});