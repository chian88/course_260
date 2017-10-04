Handlebars.registerHelper('generateState', function(card) {
  var html = "";

  if (card.subscribe) {
    html += '<li class="subscribed"></li>';
  } 

  if (card.description.length) {
    html += '<li class="description"></li>';
  }

  if (card.comments.length) {
    html += '<li class="comments">' + card.comments.length + '</li>';
  }

  return html;  
});


Handlebars.registerHelper('generateLabels', function(labels) {
  var html = "";

  labels.forEach(function(label) {
    html += "<li style=\"background: " + label.color + "\">" + label.title + "</li>";
  });

  return html;
})