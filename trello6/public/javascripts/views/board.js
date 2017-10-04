var BoardView = Backbone.View.extend({
  template: App.templates.board,
  el: "main",
  events: {
    "click #add_list": "addList",
    "click .add_card": "addCard"
  },
  addCard: function(e) {
    e.preventDefault();
    var list_id = $(e.target).parent("li").attr("data-id");

    new AddCardView({
      list_id: list_id
    });
  },
  addList: function(e) {
    e.preventDefault();
    new AddListView();
  },
  render: function() {
    this.$el.html(this.template({
      board_name: "Becoming a King"
    }));
  },
  initialize: function() {
    this.render();
  }
})