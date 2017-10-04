var EditLabelView = Backbone.View.extend({
  template: App.templates.edit_label,
  tagName: "div",
  attributes: {
    class: "popup existing_label"
  },
  events: {
    "click a.close": "close",
    "click input[type=checkbox]": "toggleLabel",
    "click input.label_change": "changeLabel",
    "click a.new_label": "newLabel"
  },
  newLabel: function(e) {
    e.preventDefault();

    new NewLabelView({
      edit_label: this.$el,
      card: this.card,
      list: this.$list      
    });
  },
  changeLabel: function(e) {
    e.preventDefault();

    new ChangeLabelView({
      edit_label: this.$el,
      card: this.card,
      list: this.$list
    });
  },
  toggleLabel: function(e) {
    var checked = $(e.currentTarget).prop("checked"),
        id = $(e.currentTarget).closest("li").attr("data-id");

    if (checked) {
      this.card.addLabel(id);
    } else {
      this.card.removeLabel(id);
    }
  },
  close: function(e){
    e.preventDefault();
    $(e.currentTarget).parents(".popup").remove();
  },
  render: function() {
    var $existed = this.$list.parents("#card").find(".existing_label");

    this.$el.html(this.template({
      existing_color: App.colors.toJSON(),
      card: this.card.toJSON()
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
});