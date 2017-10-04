var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: "li",
  events: {
    "click a.list_option": "listOption",
    "click h3": "renderEditTitle"
  },
  renderEditTitle: function(e) {
    var $title = $(e.currentTarget);
    $input = $("<input type=text id=list_title_edit>").val($title.text());
    $title.replaceWith($input);

    $input.on("keyup", function(e) {
      if (e.which === 13) {
        var newTitle = $input.val();
        this.model.editTitle(newTitle)
      }
    }.bind(this));
  },
  listOption: function(e) {
    e.preventDefault();
    $list = $(e.currentTarget);
    new DeleteListView({
      list: $list,
      model: this.model
    });
  },
  render: function() {
    this.$el.attr("data-id", this.model.get("id"));
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("#add_list").before(this.$el);
  },
  renderCard: function(card) {
    new CardView({
      model: card
    });
  },
  initialize: function() {
    this.cards = this.model.get("cards");
    this.render();
    if (this.cards) { this.cards.each(this.renderCard.bind(this)); }
  }
});