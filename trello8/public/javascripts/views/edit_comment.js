var EditCommentView = Backbone.View.extend({
  template: App.templates.edit_comment,
  tagName: "div",
  attributes: {
    id: "edit_comment"
  },
  events: {
    "click input": "editComment",
    "click .close": "back"
  },
  back: function(e) {
    e.preventDefault();
    this.card.trigger("change:detail");
  },
  editComment: function(e) {
    e.preventDefault();
    var comment = $(e.currentTarget).siblings("textarea").val(),
        comment_id = this.$list.attr("data-id");

    this.card.editComment({
      comment: comment,
      comment_id: comment_id
    });
  },
  render: function() {
    this.$el.html(this.template({
      comment: this.$list.find("p").text()
    }))
    this.$list.find("div").replaceWith(this.$el)
  },
  initialize: function(opt) {
    this.card = opt.card;
    this.$list = opt.list;
    this.render();
  }
})