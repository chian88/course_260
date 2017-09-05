var person = [{
  name: "Chian Yee",
  colors: ['blue', 'red', 'green']
}, {
  name: "Tom",
  colors: ['black', 'white', 'orange']
}, {
  name: "James",
  colors: ['pink', 'cyan', 'taupe']
}]

var app = {
  init: function() {
    this.appView = new AppView();
    this.appView.render();
    this.list = new List(person);
    this.listView = new ListView({
      collection: this.list
    });
    this.listView.render();
  }

}

app.init();