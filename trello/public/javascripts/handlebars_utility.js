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
