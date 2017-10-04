var Cards = Backbone.Collection.extend({
  model: Card,
  removeCardLabels: function(color_id) {
    this.each(function(card) {
      card.removeLabel(color_id);
    });
  },
  removeCard: function(card) {
    $.ajax({
      url: "/cards",
      method: "delete",
      data: card.toJSON()
    })
  },
  addCard: function(card) {
    $.ajax({
      url: "/cards",
      method: "post",
      data: card.toJSON()
    });
  },
  sortCards: function(list_id) {
    $.ajax({
      url: "/allcards",
      method: "post",
      data: {
        cards: this.toJSON(),
        list_id: list_id
      }
    });
  },

  initialize: function() {
    this.on("remove", this.removeCard);
    this.on("add", this.addCard);
    this.on("sort", this.sortCards);
  }
});