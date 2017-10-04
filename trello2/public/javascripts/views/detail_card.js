var DetailCardView = Backbone.View.extend({
  template: App.templates.card_detail,
  tagName: "article",
  attributes: {
    id: "detail"
  },
  events: {
    "click #card > a.close": "back",
    "click div#cover": "back",
    "click li.card_label": "label"
  },
  label: function(e) {
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
  render: function() {
    var cardViewData = this.model.toJSON();
    cardViewData.color_selection = App.colors.toJSON();
    this.$el.html(this.template({
      card: cardViewData,
      list: this.list.toJSON()
    }));

    App.$el.find("main").append(this.$el);
  },

  initialize: function(opt) {
    this.list = opt.list;
    this.render();
  }
});