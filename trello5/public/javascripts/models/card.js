var Card = Backbone.Model.extend({
  setDueDate: function(due) {
    this.composeNotification("a due date has been added to the card '" + this.get("title") + "'")
    this.set("due", due);
    this.trigger("change:detail")
  },
  removeDueDate: function() {
    this.composeNotification("a due date has been removed from the card '" + this.get("title") + "'")
    this.set("due", {});
    this.trigger("change:detail");    
  },
  addLabel: function(id) {
    var labels = this.toJSON().labels.slice();
    labels.push({id: id});

    this.composeNotification("a new label has been added to the card '" + this.get("title")+ "'")
    this.set("labels", labels);
    this.trigger("change:detail");
  },
  removeLabel: function(id) {
    var labels = this.get("labels").filter(function(label) {
      return label.id !== id;
    });

    this.composeNotification("a label has been removed from the card '" + this.get("title") + "'")
    this.set("labels", labels);
    this.trigger("change:detail");
  },
  editTitle: function(title) {
    this.composeNotification("The card with the title '" + this.get("title") + "' has changed.")
    this.set("title", title);
    this.trigger("change:detail", this.toJSON());
  },
  saveDescription: function(description) {
    this.composeNotification("The card '" + this.get("title") + "' description has changed.")
    this.set("description", description);
    this.trigger("change:detail");
  },
  deleteComment: function(data) {
    var comments = this.toJSON().comments.slice();

    comments = comments.filter(function(comment) {
      return comment.id !== data.comment_id;
    });

    this.composeNotification("A comment has been deleted from the card '" + this.get("title") + "'")
    this.set("comments", comments);
    this.trigger("change:detail");
  },
  addComment: function(data) {
    var comments = this.toJSON().comments.slice(),
        last_id = this.findCommentID(comments);

    comments.push({
      comment: data.comment,
      id: last_id
    });

    this.composeNotification("A comment has been added to the card '" + this.get("title") + "'")
    this.set("comments", comments);
    this.trigger("change:detail");
  },
  editComment: function(data) {
    var comments = this.toJSON().comments.slice();

    comment_index = comments.findIndex(function(comment) {
      return comment.id === data.comment_id;
    });

    comments[comment_index].comment = data.comment;

    this.composeNotification("A comment from the card '" + this.get("title") + "' has been edited. ")
    this.set("comments", comments);
    this.trigger("change:detail");
  },
  updateCard: function(card) {
    $.ajax({
      url: "/cards",
      type: "put",
      data: card.toJSON()
    });
  },
  findCommentID: function(comments) {
    var id = -Infinity;

    if (comments.length === 0) { return "1" }

    for (var i = 0; i < comments.length; i += 1) {
      if (+comments[i].id > id) { 
        id = +comments[i].id;
      }
    }
    return String(id + 1);
  },
  determineID: function() {
    var cards = this.collection.toJSON(),
        id = -Infinity;

    if (cards.length === 1) { return "1"; }

    for (var i = 0; i < cards.length; i += 1) {
      if (+cards[i].id > id) {
        id = +cards[i].id;
      }
    }

    return String(id + 1);
  }, 
  composeNotification: function(message) {
    if (this.get("subscribe") === "true") {
      var notification = JSON.parse(window.localStorage.getItem("notification")) || [];
      notification.push(message);
      window.localStorage.setItem("notification", JSON.stringify(notification));
    }
  }, 
  initializeCard: function(card) {
    this.set("id", this.determineID());
    if (!card.get("labels")) {this.set("labels", []);}
    this.set("subscribe", false);
    if (!card.get("comments")) {this.set("comments", []); }
    if (!card.get("due")) { this.set("due", {}) };
  },
  initialize: function(opt) {
    this.on("change", this.updateCard);
    this.on("add", this.initializeCard);
  }
})