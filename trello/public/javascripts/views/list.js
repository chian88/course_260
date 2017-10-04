var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    "click li.card": "renderCardDetail"
  },
  el: '.lists > ol',
  renderCardDetail: function(e) {
    debugger;
    var id = $(e.currentTarget).attr("data-id"),
        cards = this.model.get("cards"),
        card = cards.get(+id);
  },
  render: function() {
    this.$el.append(this.template(this.model.toJSON()));
    // this.$el.on("click", "ol.cards > li", this.renderCardDetail);
  },
  initialize: function() {
    this.render();
  }
})