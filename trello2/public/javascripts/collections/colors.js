var Colors = Backbone.Collection.extend({
  model: Color,
  updateColor: function(color_id, info) {
    var color = {
      id: color_id,
      title: info.title,
      colors: info.color      
    }
    this.add(color, {merge: true});

    $.ajax({
      url: "/colors",
      type: "put",
      data: color,
      success: function() {
        router.navigate("/", {trigger: true})
      }
    });
  },
  removeColor: function(color_id) {
    this.remove(color_id);
    var data = { color_id: color_id };
    App.cards.removeLabels(color_id);
    $.ajax({
      url: "/colors",
      type: "delete",
      data: data,
      success: function() {
        router.navigate("/", {trigger: true});
      }
    })
  }
})