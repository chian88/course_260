Handlebars.registerHelper("scheduleStamp", function(due) {
  if(!due) { return; }

  if (Object.keys(due).length) {
    if (due.done === "true") {
      return '<li class="schedule done">' + due.date + '</li>';
    } else {
      return '<li class="schedule">' + due.date + '</li>';
    }
    
  } 
});

Handlebars.registerHelper("detailSchedule", function(due) {
  if (!due) { return; }
  var html = "";

  if (Object.keys(due).length) {
    var today = new Date(),
        date = due.date.split("/"),
        day = date[0],
        month = date[1],
        year = date[2],
        time = due.time.split(":"),
        hour = time[0],
        minute = time[1],
        scheduleDate = new Date(+year, (+month) -1, +day, +hour, +minute, 0);

    if (due.done === "true") {
      html = `
        <dl>
          <dt>Due Date</dt>
          <dd class="duedate done">
            <input type="checkbox" id="done" checked readonly>
            <input type="button" value="` + due.date + ` at ` +due.time +`">
          </dd>
        </dl>
      `    
    } else if ((scheduleDate - today) < 0){
      html = `
        <dl>
          <dt>Due Date</dt>
          <dd class="duedate pastdue">
            <input type="checkbox" id="done" readonly>
            <input type="button" value="` + due.date + ` at ` +due.time +`">       
          </dd>
        </dl>
      `           
    } else {
      html = `
        <dl>
          <dt>Due Date</dt>
          <dd class="duedate">
            <input type="checkbox" id="done" readonly>
            <input type="button" value="` + due.date + ` at ` +due.time +`">
          </dd>
        </dl>
      `              
    }

  }
  return html;
});

Handlebars.registerHelper("checked_state", function(labels, id) {
  if (!labels || labels.length === 0) { return; }

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

// // find title of the color
Handlebars.registerHelper("find_color_title", function(color_id) {
  return App.colors.findWhere({ id: color_id}).get("title");
});

// // List Title in Detail Card View
Handlebars.registerHelper("find_list_title", function(list_id) {
  return App.lists.findWhere({id: list_id}).get("title");
});

// // Generate Card Position in Move View
Handlebars.registerHelper("generate_card_position", function(activeCard) {
  var html = ""
  activeCard.forEach(function(card, index) {
    html += "<option>" + (index + 1) + "</option>\n";
  });

  html += "<option>" + (activeCard.length + 1) + "</option>\n";

  return html;
});


// Generate List selection on Move popup

Handlebars.registerHelper("generate_list_selection", function(lists, activeList) {
  var html = ""
  lists.forEach(function(list) {
    if (list.id === activeList.id) {
      html += "<option value='" + list.id + "' selected>" + list.title + "</option>\n"
    } else {
      html += "<option value='" + list.id + "'>" + list.title + "</option>\n"  
    }
  });

  return html;
});


Handlebars.registerHelper("count", function(array) {
  return array.length;
});


Handlebars.registerHelper("parseDate", function(dateString) {
  return dateString.split(",")[0];
})

Handlebars.registerHelper("parseTime", function(dateString) {
  var time = dateString.split(",")[1].replace("\s", "");
      
  time = time.split(":");
  return time[0] + ":" + time[1];
})

