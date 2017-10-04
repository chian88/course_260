var router = new (Backbone.Router.extend({
  routes: {
    ":list_id/:card_id": App.renderCardDetail
  },
  boardView: function() {
    App.boardView();
  },

  initialize: function() {
    this.route(/^\/?$/, "boardView", this.boardView);
  }
}))();


Backbone.history.start({
  pushState: true
});