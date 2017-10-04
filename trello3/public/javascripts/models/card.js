var Card = Backbone.Model.extend({
  addLabel: function(id) {
    var labels = this.toJSON().labels.slice();
    labels.push({id: id});
    this.set("labels", labels);
    this.trigger("change:detail", this.toJSON());
  },
  removeLabel: function(id) {
    var labels = this.get("labels").filter(function(label) {
      return label.id !== id;
    });

    this.set("labels", labels);
    this.trigger("change:detail", this.toJSON());
  },
  updateCard: function(card) {
    $.ajax({
      url: "/cards",
      type: "put",
      data: card.toJSON()
    });
  },
  initialize: function() {
    this.on("change", this.updateCard);
  }
})