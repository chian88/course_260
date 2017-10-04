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
    "click li#move": "renderMove",
    "click #description a": "editDescription",
    "click #add_comment input": "addComment",
    "click a.edit_comment": "editComment",
    "click a.delete_comment": "deleteComment",
    "click h4": "editTitle",
    "click #copy": "renderCopy",
    "click #archive": "deleteCard",
    "click #due": "renderDue",
    "click .duedate": "toggleDone",
    "click #subscribe": "toggleSubscribe"
  },
  toggleSubscribe: function(e) {
    if (this.model.get("subscribe") === "true") {
      this.model.set("subscribe", "false");
    } else {
      this.model.set("subscribe", "true");      
    }
    this.model.trigger("change:detail");
  },

  toggleDone: function(e) {
    var $checkbox = $(e.currentTarget).closest("dd").find("input[type=checkbox]"),
        due = this.model.get("due");

    $checkbox.prop("checked", !$checkbox.prop("checked"));

    if ($checkbox.is(":checked")) {
      due.done = "true";
    } else {
      due.done = "false";
    }

    this.model.set("due", due);
    this.model.trigger("change:detail");
  },

  renderDue: function(e) {
    e.preventDefault();

    var $list = $(e.currentTarget);

    new DueView({
      list: $list,
      card: this.model
    });
  },

  deleteCard: function(e) {
    e.preventDefault();
    var list_id = this.model.get("list_id"),
        list = App.lists.get({id: list_id});

    list.get("cards").remove(this.model);

    App.boardView();
  },

  renderCopy: function(e) {
    e.preventDefault();

    var $list = $(e.currentTarget);

    new CopyView({
      list: $list,
      card: this.model
    });
  },
  editTitle: function(e) {
    var $title = $(e.currentTarget);
    $input = $("<input type=text id=title_edit>").val($title.text());
    $title.replaceWith($input);

    $input.on("keyup", function(e) {
      if (e.which === 13) {
        var newTitle = $input.val();
        this.model.editTitle(newTitle)
      }
    }.bind(this));
  },

  deleteComment: function(e) {
    e.preventDefault();
    var comment_id = $(e.currentTarget).closest("li").attr("data-id");

    this.model.deleteComment({
      comment_id: comment_id
    });
  },
  editComment: function(e) {
    e.preventDefault();
    var $list = $(e.currentTarget).closest("li");
    new EditCommentView({
      card: this.model,
      list: $list
    })
  },
  addComment: function(e) {
    e.preventDefault();
    var comment = $(e.currentTarget).siblings("textarea").val();

    this.model.addComment({
      comment: comment
    });
  },
  editDescription: function(e) {
    e.preventDefault();
    $list = $(e.currentTarget).parents("#description");

    new EditDescriptionView({
      card: this.model,
      list: $list
    })
    
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

  initialize: function() {
    this.render();
    this.listenTo(this.model, "change:detail", this.refresh);
    this.listenTo(App.colors, "change:detail", this.refresh);
  }
});