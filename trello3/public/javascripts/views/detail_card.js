var DetailCardView = Backbone.View.extend({
  template: App.templates.card_detail,
  tagName: "article",
  attributes: {
    id: "detail"
  },
  events: {
    "click #card > a.close": "back",
    "click div#cover": "back",
    "click li.card_label": "renderLabel",
    "click li#label": "renderLabel",
    "click li#move": "renderMove"

  },
  renderMove: function(e) {
    e.preventDefault();

    var $list = $(e.currentTarget);
    new MoveView({
      list: $list,
      card: this.model
    });

  },
  renderLabel: function(e) {
    debugger;
    e.preventDefault();
    var $list = $(e.currentTarget);

    new EditLabelView({
      list: $list,
      card: this.model
    });
  },
  back: function(e) {
    e.preventDefault();
    window.history.back();
  },
  refresh: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("main").append(this.$el);
  },

  initialize: function(opt) {
    this.render();
    this.listenTo(this.model, "change:detail", this.refresh);
    this.listenTo(App.colors, "change:detail", this.refresh);
  }
});