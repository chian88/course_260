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
  if (labels.length === 0) { return; }

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
// find color value of colors
Handlebars.registerHelper("find_color", function(color_id) {
  return App.colors.findWhere({ id: color_id}).get("colors");
});

// find title of the color
Handlebars.registerHelper("find_color_title", function(color_id) {
  return App.colors.findWhere({ id: color_id}).get("title");
});

// List Title in Detail Card View
Handlebars.registerHelper("find_list_title", function(list_id) {
  return App.lists.findWhere({id: list_id}).get("title");
});
