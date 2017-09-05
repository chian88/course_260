var FruitList = Backbone.View.extend({
  tagName: "main",
  attributes: {
    id: "fruit"
  },
  events: {
    "click a.add": "addToCart"
  },
  addToCart: function(e) {
    e.preventDefault();
  },
  template: fruit_template,
  render: function() {
    this.$el.html(this.template({
      fruits: this.collection.toJSON()
    });
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "change", this.render);
  }
});

var fruit_view = new FruitList({
  collection: fruits
});

