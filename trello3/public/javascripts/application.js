var App = {
  templates: JST,
  $el: $(document.body),
  renderList: function(list) {
    new ListView({ model: list });
  },
  renderCardDetail: function(list_id, card_id) {
    var card = App.cards.findWhere({
      list_id: list_id,
      card_id: card_id
    });

    new DetailCardView({ 
      model: card
    });
  },
  bindEvents: function() {
    // _.extend(this, Backbone.Events);
    // this.on("renderCardDetail", this.renderCardDetail);
  },    
  boardView: function() {
    new HeaderView();
    this.board = new BoardView();
    this.lists.each(this.renderList.bind(App));
    // this.bindEvents();
  }
}