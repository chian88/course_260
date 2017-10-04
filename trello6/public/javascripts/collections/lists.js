var Lists = Backbone.Collection.extend({
  model: List,
  addList: function(list) {
    $.ajax({
      url: "/lists",
      type: "post",
      data: list.toJSON()
    });
    list.set("cards", new Cards());
    App.boardView();
  },
  removeList: function(list) {
    var list_id = list.get("id");
    $.ajax({
      url: "/lists",
      type: "delete",
      data: {list_id: list_id}
    });
    App.boardView();
  },
  removeCardLabels: function(color_id) {
    this.each(function(list) {
      list.get("cards").removeCardLabels(color_id);
    })
  },
  initialize: function() {
    this.on("add", this.addList);
    this.on("remove", this.removeList);
  }
});