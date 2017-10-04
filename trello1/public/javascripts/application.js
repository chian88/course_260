var App = {
  templates: JST,
  $el: $(document.body),
  boardView: function() {
    this.board = new BoardView();
    this.renderLists();
    this.generateCards();
    this.bindEvents();
  },

  renderCardDetail: function(list_id, card_id) {
    var list = this.lists.get(list_id),
        card = list.get("cards").get(card_id);

    new CardView({
      list: list,
      card: card
    });
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("renderCardDetail", this.renderCardDetail)
  },
  generateCards: function() {
    this.lists.each(function(list) {
      listData = list.toJSON();
      cardsData = listData.cards;
      list.set("cards", new Cards(cardsData));
    });
  },
  renderLists: function() {
    this.lists.each(this.renderList);
  },
  renderList: function(list) {
    new ListView({
      model: list
    });
  }
}


