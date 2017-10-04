var Colors = Backbone.Collection.extend({
  model: Color,
  updateColors: function(color_id, info) {
    var color = {
      id: color_id,
      title: info.title,
      colors: info.color      
    }
    this.add(color, {merge: true});
    this.trigger("change:detail");
  },
  addColors: function(color) {
    var id = this.findLastID();
    color.id = id + 1;
    this.add(color);
    this.trigger("change:detail");
  },
  removeColors: function(color_id) {
    this.remove(color_id);
    App.cards.removeLabels(color_id);
    this.trigger("change:detail");
  },
  findLastID: function() {
    var colors = this.toJSON(),
        last_id = -Infinity;

    if (colors.length === 0) { return 0;}

    for(var i = 0; i < colors.length; i += 1) {
      if (colors[i].id > last_id){
        last_id = colors[i].id;
      }
    }

    return last_id;
  }
})