var DueView = Backbone.View.extend({
  template: App.templates.due,
  tagName: "div",
  attributes: {
    class: "popup due"
  },
  events: {
    "click a.close": "close",
    "click input.submit": "save",
    "click input.delete": "delete"
  },
  delete: function(e) {
    e.preventDefault();
    this.card.removeDueDate();
  },
  save: function(e) {
    e.preventDefault();
    var date = $("#date_input").val(),
        time = $("#time_input").val();

    this.card.setDueDate({
      "date": date,
      "time": time,
      done: false      
    });
  },
  close: function(e){
    e.preventDefault();
    $(e.currentTarget).parents(".popup").remove();
  },
  render: function() {
    var $existed = this.$list.closest("nav").find(".due");

    this.$el.html(this.template({
      card: this.card.toJSON(),
      date: this.today.toLocaleString()
    }));

    this.$el.css({
      top: this.$list.position().top + this.$list.height() + 20,
      left: this.$list.position().left
    });

    if ($existed.length) {
      $existed.remove();
    } else {
      this.$list.after(this.$el);      
    }

    $("#datepicker").datepicker({
      dateFormat: "dd/mm/yy",
      onSelect: function(str) {
        $("#date_input").val(str);
      }
    });


  },
  initialize: function(opt) {
    this.$list = opt.list;
    this.card = opt.card;
    this.today = new Date();
    this.render();
  }})