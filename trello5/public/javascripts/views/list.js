var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: "li",
  events: {
    "click a.list_option": "listOption"
  },
  listOption: function(e) {
    e.preventDefault();
    $list = $(e.currentTarget);
    new DeleteListView({
      list: $list,
      model: this.model
    });
  },
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
  initialize: function() {
    this.cards = this.model.get("cards");
    this.render();
    if (this.cards) { this.cards.each(this.renderCard.bind(this)); }
  }
});