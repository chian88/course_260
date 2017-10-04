var Cards = Backbone.Collection.extend({
  model: Card,
  addCard: function(last_id, list_id, cardTitle) {
    // this.add({
    //   card_id: last_id,
    //   list_id: list_id,
    //   title: cardTitle,
    //   description: "",
    //   labels: [],
    //   subscribe: false,
    //   comments: [],
    //   due: {}
    // });

    // var card = App.cards.findWhere({
    //   card_id: last_id,
    //   list_id: list_id
    // }).toJSON();

    // $.ajax({
    //   url: "/cards",
    //   type: "post",
    //   data: card,
    //   success: function() {
    //     App.boardView();
    //   }
    // });
  },
  removeLabels: function(color_id) {
    this.each(function(card) {
      card.removeLabel(color_id);
    }.bind(this));
  }
});