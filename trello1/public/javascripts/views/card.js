var CardView = Backbone.View.extend({
  template: App.templates.card,
  events: {
    "click a.close": "closeCard",
    "click .labels li": "showLabel"
  },

  showLabel: function(e) {
    var $li = $(e.currentTarget);
    $li.parent("ul.labels").find(".popout").hide();
    $li.find(".popout").show();
  },

  closeCard: function(e) {
    e.preventDefault();
    router.navigate("/", {trigger: true})
  },
  render: function() {
    App.$el.find(".modal_cover").remove();
    App.$el.find(".card_detail").remove();
    this.$el.html(this.template({
      list: this.list.toJSON(),
      card: this.card.toJSON()      
    }))
    App.$el.find(".lists").after(this.$el);
  },
  renderLabel: function() {
    new LabelView();
    this.card.get('labels').forEach(function(label) {
      new LabelView({ label: label })
    });
  },
  initialize: function(options) {
    this.list = options.list;
    this.card = options.card;
    this.render();
    this.renderLabel();
  }
})