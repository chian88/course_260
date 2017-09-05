var PostModel = Backbone.Model.extend({});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts"
});

var blog_roll = new Posts();

blog_roll.fetch({
  reset: true,
  success: function() {
  }
});