var NewLabelView = Backbone.View.extend({
  template: App.templates.new_label,
  tagName: "div",
  attributes: {
    class: "popup new_label"
  },
  events: {
    submit: "newLabel",
    "click a.close": "close",
    "click a.back": "back",
  },
  deleteLabel: function(e) {
    var color_id = this.$list.attr("data-id");
    App.colors.removeColors(color_id);
  },
  back: function(e) {
    e.preventDefault();
    this.$el.remove();
    new EditLabelView({
      list: this.$list,
      card: this.card
    });
  },
  close: function(e){
    e.preventDefault();
    $(e.currentTarget).parents(".popup").remove();
  },
  newLabel: function(e) {
    e.preventDefault();
    var array = $(e.target).serializeArray(),
        info = {};

    array.forEach(function(obj) {
      info[obj.name] = obj.value;
    });

    App.colors.addColors(info);    
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.css({
      top: this.$list.position().top + this.$list.height() + 20,
      left: this.$list.position().left
    })
    this.edit_label.replaceWith(this.$el);
  },
  initialize: function(opt) {
    this.edit_label = opt.edit_label;
    this.card = opt.card;
    this.$list = opt.list;
    this.render();
  }
})