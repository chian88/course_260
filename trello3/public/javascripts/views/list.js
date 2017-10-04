var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: "li",
  render: function() {
    this.$el.attr("data-id", this.model.get("id"));
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("#add_list").before(this.$el);
  },
  renderCard: function(card) {
    new CardView({
      model: card
    });
  },
  initialize: function(opt) {
    this.cards = App.cards.where({ list_id: this.model.get("id") });
    this.render();
    this.cards.forEach(this.renderCard.bind(this));
  }
});