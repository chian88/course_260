var MoveView = Backbone.View.extend({
  template: App.templates.move,
  tagName: "div",
  attributes: {
    class: "popup move"
  },
  events: {
    "click a.close": "close",
    "change #move_list": "refresh",
    submit: "moveCard"
  },
  determineNewID: function(targetList) {
    var id = -Infinity;

    cards = targetList.get("cards").toJSON();

    if (!cards || cards.length === 0) { return 1; }

    for (var i = 0; i < cards.length; i += 1) {
      if (+cards[i].id > id) {
        id = +cards[i].id;
      }
    }

    return String(id + 1);
  },
  moveCard: function(e) {
    e.preventDefault();

    var targetListID = $("#move_list").find(":selected").val(),
        targetPosition = +$("#move_position").find(":selected").val(),
        originalListID = this.card.get("list_id"),
        originalList = App.lists.get({id: originalListID}),
        targetList = App.lists.get({id: targetListID});

    originalList.get("cards").remove(this.card);
    this.card.set("id", this.determineNewID(targetList));
    this.card.set("list_id", targetListID);
    targetList.get("cards").add(this.card, {at: targetPosition - 1});
    targetList.get("cards").trigger("sort", targetListID);
    App.boardView();

  },
  refresh: function(e) {
    var list_id = $(e.currentTarget).find(":selected").val(),
        activeList = App.lists.get({id: list_id }),
        activeCard = activeList.get("cards");

    this.$el.html(this.template({
      lists: App.lists.toJSON(),
      activeList: activeList.toJSON(),
      activeCard: activeCard.toJSON()
    }));
  },
  close: function(e){
    e.preventDefault();
    $(e.currentTarget).parents(".popup").remove();
  },
  render: function() {
    var $existed = this.$list.closest("nav").find(".move"),
        list_id = this.card.get("list_id"),
        activeList = App.lists.get({ id: list_id }),
        activeCard = activeList.get("cards");

    this.$el.html(this.template({
      lists: App.lists.toJSON(),
      activeList: activeList.toJSON(),
      activeCard: activeCard.toJSON()
    }));

    this.$el.css({
      top: this.$list.position().top + this.$list.height() + 20,
      left: this.$list.position().left
    });

    if ($existed.length) {
      $existed.remove();
    } else {
      this.$list.after(this.$el);      
    }
  },
  initialize: function(opt) {
    this.$list = opt.list;
    this.card = opt.card;
    this.render();
  }
})