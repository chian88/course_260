var App = {
  templates: JST,
  $el: $(document.body),
  boardView: function() {
    this.board = new BoardView();
    this.renderLists();
    this.generateCards();
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


