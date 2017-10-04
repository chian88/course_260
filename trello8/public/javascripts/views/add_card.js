var AddCardView = Backbone.View.extend({
  template: App.templates.add_card,
  tagName: "div",
  attributes: {
    id: "fill_card"
  },
  events: {
    "click input[type=button]": "createCard",
    "click a.close": "back"
  },
  back: function(e) {
    e.preventDefault();
    App.boardView();
  },
  createCard: function(e) {
    e.preventDefault();

    var $fill_card = $(e.target).parent("#fill_card"),
        cardTitle = $fill_card.find("textarea").val().replace(/\r?\n|\r/g, "");

    this.list.get("cards").add({ 
      title: cardTitle,
      list_id: this.list_id
    });

    App.boardView();
  },
  render: function() {
    this.$el.html(this.template());
    var listHTML = "li[data-id='" + this.list_id + "'] ";
    App.$el.find( listHTML + "input.add_card").replaceWith(this.$el);
  },
  initialize: function(opt) {
    this.list_id = opt.list_id;
    this.list = App.lists.findWhere({ id: this.list_id });
    this.render();
  }
});