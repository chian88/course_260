var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: "li",
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("#add_list").before(this.$el);
  },
  renderCard: function(card) {
    new CardView({
      list: this.$el,
      card: card
    });
  },
  initialize: function(opt) {
    this.$el.attr("data-id", this.model.get("id"));
    this.cards = opt.cards;
    this.render();
    this.cards.forEach(this.renderCard.bind(this));

  }
});