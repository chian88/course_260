var DeleteListView = Backbone.View.extend({
  template: App.templates.delete_list,
  tagName: "div",
  events: {
    "click #delete_list": "deleteList"
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