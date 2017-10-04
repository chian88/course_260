var router = new (Backbone.Router.extend({
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