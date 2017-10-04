var Color = Backbone.Model.extend({
  updateColor: function(data) {
    $.ajax({
      url: "/colors",
      type: "put",
      data: data.toJSON()
    });
  },
  removeColor: function(data) {
    $.ajax({
      url: "/colors",
      type: "delete",
      data: data.toJSON()
    });
  },
  addColor: function(data) {
    $.ajax({
      url: "/colors",
      type: "post",
      data: data.toJSON()
    });
  },
  initialize: function() {
    this.on("change", this.updateColor);
    this.on("add", this.addColor);
    this.on("remove", this.removeColor);
  }
});