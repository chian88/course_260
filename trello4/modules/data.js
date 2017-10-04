var path = require('path'),
    fs = require('fs'),
    file_path = path.resolve(path.dirname(__dirname), "data/data.json");

module.exports = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },
  set: function(data) {
    fs.writeFileSync(file_path, JSON.stringify(data));
  }
}