var App = {
  templates: JST,
  $el: $(document.body),
  renderList: function(list) {
    new ListView({ model: list });
  },
  renderCardDetail: function(list_id, card_id) {
    var list = App.lists.findWhere({id: list_id}),
        cards = list.get("cards"),
        card = cards.findWhere({id: card_id});

    new DetailCardView({ 
      model: card
    });
  },
  bindSortableEvent: function() {
    $(".sortable").sortable({
      update: function(event, ui) {
        var card_id = ui.item.attr("data-id"),
            list_id = ui.item.parents("li").attr("data-id"),
            position = ui.item.index(),
            list = App.lists.get({id: list_id}),
            cards = list.get("cards"),
            card = cards.get({id: card_id, list_id: list_id});

      cards.remove(card);
      cards.add(card, {at: position});
      cards.trigger("sort", list_id);
      App.boardView();
      }
    });
  },
  boardView: function() {
    new HeaderView();
    this.board = new BoardView();
    this.lists.each(this.renderList.bind(App));
    this.bindSortableEvent();
  }
}