var MoveView = Backbone.View.extend({
  template: App.templates.move,
  tagName: "div",
  attributes: {
    class: "popup move"
  },
  events: {
    "click a.close": "close",
    "change #move_list": "refresh"
  },
  refresh: function() {
    debugger;
  },
  close: function(e){
    e.preventDefault();
    $(e.currentTarget).parents(".popup").remove();
  },
  render: function() {
    var $existed = this.$list.closest("nav").find(".move"),
        activeList = App.cards.where({list_id: "1"});

    this.$el.html(this.template({
      list: App.lists.toJSON(),
      activeList: activeList
    }));

    this.$el.css({
      top: this.$list.position().top + this.$list.height() + 20,
      left: this.$list.position().left
    });

    // if ($existed.length) {
    //   $existed.remove();
    // } else {
      this.$list.after(this.$el);      
    // }
  },
  initialize: function(opt) {
    this.$list = opt.list;
    this.card = opt.card;
    this.render();
  }
})