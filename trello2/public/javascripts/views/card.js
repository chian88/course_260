var CardView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.card,
  events: {
    "click": "detailCard"
  },
  detailCard: function(e) {
    e.preventDefault();
    router.navigate(this.$list.attr("data-id") + "/" + this.card.get("card_id"), {trigger: true});
  },
  render: function() {
    var cardViewData = this.card.toJSON()
    cardViewData.color_selection = App.colors.toJSON();

    this.$el.html(this.template(cardViewData));
    this.$list.find("ol.cards").append(this.$el);
  },
  initialize: function(opt) {
    this.$list = opt.list;
    this.card = opt.card;
    this.$el.attr("data-id", this.card.get("card_id"));
    this.render();
  }
})