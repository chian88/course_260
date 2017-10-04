var App = {
  templates: JST,
  $el: $(document.body),
  renderList: function(list) {
    var list_id = list.get("id"),
        cards = this.cards.where({ list_id: list_id });

    new ListView({
      model: list,
      cards: cards
    });
  },
  renderCardDetail: function(list_id, card_id) {
    var card = App.cards.findWhere({
      list_id: list_id,
      card_id: card_id
    });

    var list = App.lists.findWhere({ id: list_id });

    new DetailCardView({ 
      model: card,
      list: list
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("renderCardDetail", this.renderCardDetail);
  },    
  boardView: function() {
    this.header = new HeaderView();
    this.board = new BoardView();
    this.lists.each(this.renderList.bind(App));
    this.bindEvents();
  }
}