var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template({
      count: this.collection.getCount()
    }));

    $("body > header").html(this.$el.html());
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render);
  }
})