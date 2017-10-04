var CopyView = Backbone.View.extend({
  template: App.templates.copy,
  tagName: "div",
  attributes: {
    class: "popup copy"
  },
  events: {
    "click a.close": "close",
    "change #move_list": "refresh",
    "click input[type=submit]": "copyCard"
  },
  determineNewID: function(targetList) {
    var id = -Infinity;

    cards = targetList.get("cards").toJSON();

    if (!cards || cards.length === 0) { return 1; }

    for (var i = 0; i < cards.length; i += 1) {
      if (+cards[i].id > id) {
        id = +cards[i].id;
      }
    }

    return String(id + 1);
  },
  copyCard: function(e) {
    e.preventDefault();

    var targetListID = $("#move_list").find(":selected").val(),
        targetPosition = +$("#move_position").find(":selected").val(),
        targetList = App.lists.get({id: targetListID}),
        keepLabels = $("#keep_labels").is(":checked"),
        keepComments = $("#keep_comments").is(":checked"),
        duplicateCard = this.card.clone(),
        newTitle = $("#keep_title").val();

    duplicateCard.set("title", newTitle);

    if (!keepLabels) {
      duplicateCard.set("labels", []);
    }

    if (!keepComments) {
      duplicateCard.set("comments", []);
    }

    duplicateCard.set("id", this.determineNewID(targetList));
    duplicateCard.set("list_id", targetListID);

    targetList.get("cards").add(duplicateCard, {at: targetPosition - 1});
    targetList.get("cards").trigger("sort", targetListID);

    router.navigate("/", {trigger: true});

  },
  refresh: function(e) {
    var list_id = $(e.currentTarget).find(":selected").val(),
        activeList = App.lists.get({id: list_id }),
        activeCard = activeList.get("cards");

    this.$el.html(this.template({
      card: this.card.toJSON(),
      lists: App.lists.toJSON(),
      activeList: activeList.toJSON(),
      activeCard: activeCard.toJSON()
    }));
  },
  close: function(e){
    e.preventDefault();
    $(e.currentTarget).parents(".popup").remove();
  },
  render: function() {
    var $existed = this.$list.closest("nav").find(".copy"),
        list_id = this.card.get("list_id"),
        activeList = App.lists.get({ id: list_id }),
        activeCard = activeList.get("cards");

    this.$el.html(this.template({
      card: this.card.toJSON(),
      lists: App.lists.toJSON(),
      activeList: activeList.toJSON(),
      activeCard: activeCard.toJSON()
    }));

    this.$el.css({
      top: this.$list.position().top + this.$list.height() + 20,
      left: this.$list.position().left
    });

    if ($existed.length) {
      $existed.remove();
    } else {
      this.$list.after(this.$el);      
    }
  },
  initialize: function(opt) {
    this.$list = opt.list;
    this.card = opt.card;
    this.render();
  }
})