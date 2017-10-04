var AddCardView = Backbone.View.extend({
  template: App.templates.add_card,
  tagName: "div",
  attributes: {
    id: "fill_card"
  },
  events: {
    "click input[type=button]": "createCard"
  },
  createCard: function(e) {
    e.preventDefault();

    var $fill_card = $(e.target).parent("div"),
        cardTitle = $fill_card.find("textarea").val().replace(/\r?\n|\r/g, ""),
        last_id = String(this.cards.length + 1);

    App.cards.addCard(last_id, this.list_id, cardTitle);
  },
  render: function() {
    this.$el.html(this.template());
    var listHTML = "li[data-id='" + this.list_id + "'] ";
    App.$el.find( listHTML + "input.add_card").replaceWith(this.$el);
  },
  initialize: function(opt) {
    this.list_id = opt.list_id;
    this.cards = App.cards.where({ list_id: this.list_id });
    this.render();
  }
});