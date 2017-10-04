var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  resultTemplate: App.templates.search_result,
  notificationTemplate: App.templates.notification,
  el: "#title_bar",
  events: {
    "keyup #search_card": "searchCard",
    "click #search_result li": "renderCardDetail",
    "click #notification": "renderNotification"
  },
  renderNotification: function(e) {
    e.preventDefault();
    $list = $("#notification_result")
    if ($list.length) {
      $list.remove();
    } else {
      var $input = $(e.currentTarget),
          notification = JSON.parse(window.localStorage.getItem("notification"))

      if (notification.length) {
        $input.after(this.notificationTemplate({
          result: notification
        }));
      }      
    }
  },
  renderCardDetail: function(e) {
    e.preventDefault();

    var card_id = $(e.currentTarget).closest("li").attr("data-id"),
        list_id = $(e.currentTarget).closest("li").attr("data-listid");

    router.navigate(list_id + "/" + card_id, {trigger: true});
  },
  searchCard: function(e) {
    e.preventDefault();
    var term = $(e.currentTarget).val(),
        result = [],
        $container = $("<ul id=search_result>");

    App.lists.each(function(list) {
      list.get("cards").each(function(card) {
        debugger;
        var description = card.get("description"),
            title = card.get("title");

        if (description.includes(term) || title.includes(term)) {
          result.push(card.toJSON());
        }
      });

    });

    if (result) {
      this.renderSearchResult(result);
    }

  },
  renderSearchResult: function(result) {
    var html = this.resultTemplate({
      result: result
    });
    $("#search_result").remove();
    $("#search_card").after(html);
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
})