var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template({
      count: this.collection.getCount()
    }));

    $("header").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})