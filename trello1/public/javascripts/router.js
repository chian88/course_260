var router = new (Backbone.Router.extend({
  routes: {
    "detail/:list_id/:card_id": "cardDetail"
  },
  cardDetail: function(list_id, card_id) {
    App.trigger("renderCardDetail", list_id, card_id);
  },
  board: function() {
    App.boardView();
  },
  initialize: function() {
    this.route(/^\/?$/, "board", this.board)
  }
}))();


Backbone.history.start({
  pushState: true
});