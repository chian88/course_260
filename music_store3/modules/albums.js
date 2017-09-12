var path = require('path'),
    fs = require('fs'),
    file_path = path.resolve(path.dirname(__dirname), "data/albums.json");

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8"));
  },
  set: function writeAlbums(data) {
    data.id = this.getLastID() + 1;
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      data: data
    }), "utf8");
  },  
  get: function getAlbums() {
    return this.__readFile().data;
  },
  getLastID: function nextID() {
    return this.__readFile().last_id;  
  }
}
