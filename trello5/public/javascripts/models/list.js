var List = Backbone.Model.extend({
  determineID: function() {
    var lists = this.collection.toJSON(),
        id = -Infinity;

    if (lists.length === 0) { return 1; }

    for (var i = 0; i < lists.length; i += 1) {
      if (+lists[i].id > id) {
        id = +lists[i].id;
      }
    }

    return String(id + 1);
  },  
  initializeList: function() {
    this.set("id", this.determineID());
  },
  initialize: function(list) {
    if (list.cards) { 
      this.set("cards", new Cards(list.cards)); 
    }
    this.on("add", this.initializeList);
  }
});