var path = require('path'),
    fs = require('fs'),
    file_path = path.resolve(path.dirname(__dirname), "data/lists.json");

module.exports = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },
  set: function(lists) {
    fs.writeFileSync(file_path, JSON.stringify(lists));
  }
}