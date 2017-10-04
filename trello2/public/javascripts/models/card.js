var Card = Backbone.Model.extend({
  addLabel: function(id, title, color) {
    this.get("labels").push({
      id: id
    });
    this.collection.updateCard(this.toJSON());
  },
  removeLabel: function(id) {
    var newLabels = this.get("labels").filter(function(label) {
      return label.id !== id;
    });

    this.set("labels", newLabels);
    this.collection.updateCard(this.toJSON());
  }
})