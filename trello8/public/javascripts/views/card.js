var CardView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.card,
  alterTitleTemplate: App.templates.alter_title,
  events: {
    "click": "detailCard",
    "click a.pencil": "editTitle"
  },
  editTitle: function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $list = $(e.currentTarget).closest("li"),
        $div = this.alterTitleTemplate({
          title: $(e.currentTarget).siblings("h4").text()
        });

    $list.replaceWith($div);

    $("#alterTitle").on("click", "input",  function(e) {
      e.preventDefault();
      var newTitle = $("#alterTitle").find("textarea").val();
      this.model.editTitle(newTitle);
      App.boardView();
    }.bind(this));
  },
  detailCard: function(e) {
    e.preventDefault();
    var list_id = this.model.get("list_id"),
        card_id = this.model.get("id");

    router.navigate(list_id + "/" + card_id, {trigger: true});
  },
  render: function() {
    var selector = "li[data-id='" + this.model.get("list_id") + "'] " + "ol.cards";
    this.$el.attr("data-id", this.model.get("id"));
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find(selector).append(this.$el);
  },
  initialize: function() {
    this.render();
  }
})