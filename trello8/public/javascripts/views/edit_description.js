var EditDescriptionView = Backbone.View.extend({
  template: App.templates.description,
  tagName: "dd",
  events: {
    submit: "saveDescription",
    "click a.close": "back"
  },
  back: function(e) {
    e.preventDefault();
    this.card.trigger("change:detail");
  },
  saveDescription: function(e) {
    e.preventDefault();
    var description = $(e.target).find("textarea").val();

    this.card.saveDescription(description);
  }, 
  render: function() {
    this.$el.html(this.template(this.card.toJSON()));
    this.$list.find("dd").replaceWith(this.$el);
  },
  initialize: function(opt) {
    this.card = opt.card
    this.$list = opt.list;
    this.render();
  }
})