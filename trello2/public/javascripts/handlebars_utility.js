Handlebars.registerHelper("scheduleStamp", function(due) {
  if(!due) { return; }

  if (Object.keys(due).length) {
    return '<li class="schedule">' + due.date + '</li>';
  } 
});

Handlebars.registerHelper("detailSchedule", function(due) {
  if(!due) { return; }

  var html = "";

  if (Object.keys(due).length) {
    html = `
      <dl>
        <dt>Due Date</dt>
        <dd class="duedate pastdue">
          <input type="checkbox" id="done">
          <input type="button" value="` + due.date + ` at ` +due.time +`">
        </dd>
      </dl>
    `
  }
  return html;
});

Handlebars.registerHelper("checked_state", function(labels, id) {  
  var hasLabel = labels.find(function(label) {
    return label.id === id;
  });

  return hasLabel ? "checked" : "";
});

Handlebars.registerHelper("check_subscribe", function(subscribe) {
  if(subscribe === "true") {
    return '<li class="subscribed"></li>';
  }
});


// Color Selection Section
Handlebars.registerHelper("find_color", function(color_id, color_selection) {
  var color = color_selection.find(function(color) {
    return color.id === color_id;
  });

  return color.colors
})

Handlebars.registerHelper("find_title", function(color_id, color_selection) {
  var color = color_selection.find(function(color) {
    return color.id === color_id;
  });

  return color.title
})