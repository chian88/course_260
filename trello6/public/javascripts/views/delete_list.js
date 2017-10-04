var DeleteListView = Backbone.View.extend({
  template: App.templates.delete_list,
  tagName: "div",
  events: {
    "click #delete_list": "deleteList",
    "click a.close": "close"
  },
  close: function(e) {
    e.preventDefault();
    App.boardView();
  },
  deleteList: function(e) {
    e.preventDefault();
    App.lists.remove(this.model);
  },
  attributes: {
    class: "popup list_action"
  },
  render: function(){
    this.$el.html(this.template());
    this.$list.after(this.$el);
  },
  initialize: function(opt) {
    this.$list = opt.list
    this.render();

  }

})