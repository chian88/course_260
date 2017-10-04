var ChangeLabelView = Backbone.View.extend({
  template: App.templates.change_label,
  tagName: "div",
  attributes: {
    class: "popup change_label"
  },
  events: {
    // submit: "changeLabel",
    // "click a.close": "close",
    // "click a.back": "back",
    // "click input.delete": "delete"
  },
  delete: function(e) {
    // var color_id = this.list.attr("data-id");

    // App.colors.removeColor(color_id);
  },
  back: function(e) {
    // e.preventDefault();
    // this.$el.remove();
    // new EditLabelView({
    //   list: this.list,
    //   card: this.card
    // });
  },
  close: function(e){
    // e.preventDefault();
    // $(e.currentTarget).parents(".popup").remove();
  },
  changeLabel: function(e) {
    // e.preventDefault();

    // var $form = $(e.target),
    //     array = $form.serializeArray(),
    //     info = {},
    //     color_id = this.list.attr("data-id");

    // array.forEach(function(obj) {
    //   info[obj.name] = obj.value;
    // });

    // App.colors.updateColor(color_id, info);

  },
  render: function() {
    // this.$el.html(this.template({
    //   color_selection: App.colors.toJSON()
    // }))
    // this.$el.css({
    //   top: this.list.position().top + this.list.height() + 20,
    //   left: this.list.position().left
    // })
    // this.edit_label.replaceWith(this.$el);
  },
  initialize: function(opt) {
    // this.edit_label = opt.edit_label;
    // this.card = opt.card;
    // this.list = opt.list;
    // this.render();
  }
})