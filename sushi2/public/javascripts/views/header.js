var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template({
      count: this.collection.getCount()
    }));

    App.$el.children("header").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})