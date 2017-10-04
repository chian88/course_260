var ListView = Backbone.View.extend({
  template: App.templates.list,
  el: '.lists > ol',
  events: {
    "click li.card": "cardDetail"
  },
  cardDetail: function(e) {
    e.preventDefault();
    var card_id = +$(e.currentTarget).attr("data-id"),
        list_id = +$(e.currentTarget).parents("li.list").attr("data-id");

    router.navigate("detail/" + list_id + "/" + card_id, {trigger: true});
  },
  render: function() {
    this.$el.append(this.template(this.model.toJSON()));
    // this.$el.on("click", "ol.cards > li", this.renderCardDetail);
  },
  initialize: function() {
    this.render();
  }
})