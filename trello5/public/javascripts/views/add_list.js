var AddListView = Backbone.View.extend({
  template: App.templates.add_list,
  tagName: "li",
  attributes: {
    id: "fill_list"
  },
  events: {
    "click input[type=button]": "createList"
  },
  createList: function(e) {
    e.preventDefault();
    var $list = $(e.target).parent("li"),
        listName = $list.find("input[name='list_title']").val();

    App.lists.add({ title: listName});
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.find("#add_list").replaceWith(this.$el);
  },
  initialize: function() {
    this.render();
  }
})