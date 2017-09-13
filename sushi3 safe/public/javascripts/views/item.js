var ItemView = Backbone.View.extend({
  attributes: {
    id: "content"
  },
  template: App.templates.item,
  events: {
    "click a.add_cart": "addToCart",
    "click div.prev": "renderPrev",
    "click div.next": "renderNext"
  },
  renderPrev: function() {
    var prevID = this.model.get("id") - 1;
    if (prevID === 0) { prevID = 1 }
    router.navigate(String(prevID), { trigger: true });
  },
  renderNext: function() {
    var nextID = this.model.get("id") + 1,
        maxLength = this.collection.length;

    if (nextID === maxLength + 1) { nextID = maxLength }

    router.navigate(String(nextID), { trigger: true });
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("main").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})