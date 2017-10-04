var Lists = Backbone.Collection.extend({
  model: List,
  addList: function(last_id, listName) {
    // this.add({
    //   id: last_id,
    //   title: listName
    // });

    // var list = App.lists.findWhere({id: last_id}).toJSON();

    // $.ajax({
    //   url: "/lists",
    //   type: "post",
    //   data: list,
    //   success: function() {
    //     App.boardView();
    //   }
    // });
  }
});