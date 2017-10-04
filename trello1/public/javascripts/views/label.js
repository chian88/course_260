var LabelView = Backbone.View.extend({
  template: App.templates.label,
  newLabelTemplate: App.templates.new_label,
  tagName: "li",
  events: {
    "click a.new_label": "renderNewLabel",
    "submit": "createNewLabel"
  },
  createNewLabel: function(e) {
    var $f = $(e.target),
        arrayData = $f.serializeArray(),
        result = {};

    for(var i = 0; i < arrayData.length; i += 1) {
      result[arrayData[i].name] = arrayData[i].value
    }

    $.ajax({
      url: "/colors",
      method: "post",
      data: result,
      success: function() {
      }
    });
  },
  renderNewLabel: function(e) {
    e.preventDefault();
    this.$el.html(this.newLabelTemplate({
      existing_colors: this.existing_colors
    }));
  },
  render: function() {
    this.$el.html(this.template({
      existing_colors: this.existing_colors
    }));
    App.$el.find("ul.labels").prepend(this.$el);
  },
  initialize: function(option) {
    if (option) {
      this.label = option.label;
      this.$el.attr("style", "background-color: " + this.label.color);   
    } else {
      this.$el.attr("class", "add_labels");
    }
    this.existing_colors = App.colors;
    this.render();

  }
})