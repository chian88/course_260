var CardView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.card,
  events: {
    "click": "detailCard"
  },
  detailCard: function(e) {
    e.preventDefault();
    router.navigate(this.model.get("list_id") + "/" + this.model.get("card_id"), {trigger: true});
  },
  render: function() {
    var selector = "li[data-id='" + this.model.get("list_id") + "'] " + "ol.cards";
    this.$el.attr("data-id", this.model.get("card_id"));
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find(selector).append(this.$el);
  },
  initialize: function() {
    this.render();
  }
})