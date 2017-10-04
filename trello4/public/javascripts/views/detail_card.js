var DetailCardView = Backbone.View.extend({
  template: App.templates.card_detail,
  tagName: "article",
  attributes: {
    id: "detail"
  },
  events: {
    "click #card > a.close": "back",
    "click div#cover": "back",
    "click li.card_label": "renderEditLabel",
    "click input[type=checkbox]": "toggleLabel",
    "click input.label_change": "changeLabel",
    ".change_label submit": "alterLabel"
  },
  alterLabel: function(e) {
    debugger;
  },
  changeLabel: function(e) {
    e.preventDefault();
    $(e.currentTarget).parents(".existing_label").hide();

    $(".change_label").css({
      top: this.$list.position().top + this.$list.height() + 20,
      left: this.$list.position().left
    });

    $(".change_label").show();

  },
  toggleLabel: function(e) {
    e.preventDefault();
    var checked = $(e.currentTarget).prop("checked"),
        id = $(e.currentTarget).closest("li").attr("data-id");

    if (checked) {
      this.model.addLabel(id);
    } else {
      this.model.removeLabel(id);
    }   
  },
  renderEditLabel: function(e) {
    e.preventDefault();
    var $existing_label = this.$el.find(".existing_label"),
        visible = this.$el.find(".existing_label:visible");

    this.$list = $(e.currentTarget)

    $existing_label.css({
      top: this.$list.position().top + this.$list.height() + 20,
      left: this.$list.position().left     
    });

    $existing_label.toggle(visible.length);
  },
  back: function(e) {
    e.preventDefault();
    window.history.back();
  },
  refresh: function() {
    this.$el.html(this.template( {
      existing_color: App.colors.toJSON(),
      card: this.model.toJSON()
    }));
  },
  render: function() {
    debugger;
    this.$el.html(this.template( {
      existing_color: App.colors.toJSON(),
      card: this.model.toJSON()
    }));
    App.$el.find("main").append(this.$el);
  },

  initialize: function(opt) {
    this.render();
    this.listenTo(this.model, "change:detail", this.refresh);
  }
});