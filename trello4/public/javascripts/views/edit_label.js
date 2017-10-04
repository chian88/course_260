var EditLabelView = Backbone.View.extend({
  template: App.templates.edit_label,
  tagName: "div",
  attributes: {
    class: "popup existing_label"
  },
  events: {
    "click a.close": "close",
    "click input[type=checkbox]": "toggleLabel",
    // "click input.label_change": "changeLabel"
  },
  changeLabel: function(e) {
    // e.preventDefault();

    // new ChangeLabelView({
    //   edit_label: this.$el,
    //   card: this.card,
    //   list: this.list
    // });
  },
  toggleLabel: function(e) {
    var $li = $(e.currentTarget).closest("li"),
        checked = $(e.currentTarget).prop("checked"),
        $labels = $(e.currentTarget).parents(".labels"),
        id = $li.attr("data-id");

    if (checked) {
      this.card.addLabel(id);
      this.card.trigger("change:label", this.$list);
    //   var $new_list = $("<li>").attr({
    //     class: "card_label",
    //     "data-id": id,
    //     style: "background: " + App.colors.get(id).toJSON().colors 
    //   });

    //   $new_list.text(App.colors.get(id).toJSON().title);

    //   $labels.find(".add_label").before($new_list);

    } else {
      this.card.removeLabel(id);
      this.card.trigger("change:label", this.$list);
      $labels.find("li.card_label[data-id='" + id + "']").remove();
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