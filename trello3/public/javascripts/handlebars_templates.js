this["JST"] = this["JST"] || {};

this["JST"]["add_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<textarea></textarea><input type=\"button\" value=\"Add\"><a href=\"#\" class=\"close\"></a>";
},"useData":true});

this["JST"]["add_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input type=\"text\" name=\"list_title\" placeholder=\"Add a list...\"><input type=\"button\" value=\"Save\"><a href=\"#\" class=\"close\"></a>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<aside id=\"dashboard\"><h2>"
    + container.escapeExpression(((helper = (helper = helpers.board_name || (depth0 != null ? depth0.board_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"board_name","hash":{},"data":data}) : helper)))
    + "</h2><input type=\"button\" id=\"favorite\"><input type=\"button\" id=\"private\" value=\"Private\"><input type=\"button\" id=\"show_menu\" value=\"Show Menu\"></aside><ol id=\"lists\"><li id=\"add_list\"><input type=\"button\" value=\"Add a list...\"></li></ol>";
},"useData":true});

this["JST"]["card_detail"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<li class=\"card_label\" data-id="
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.id : depth0), depth0))
    + " style=\"background: "
    + ((stack1 = (helpers.find_color || (depth0 && depth0.find_color) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"find_color","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.find_color_title || (depth0 && depth0.find_color_title) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"find_color_title","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<li><h6>Chian Yee Lee</h6><p>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p><small>3 minutes ago - <a href=\"#\">Edit</a> <a href=\"#\">Delete</a></small></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"cover\"></div><div id=\"card\"><a href=\"\" class=\"close\"></a><section><h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4><small>in list <a href=\"#\">"
    + ((stack1 = (helpers.find_list_title || (depth0 && depth0.find_list_title) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"find_list_title","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a> <span class=\"subscribed\"></span></small><dl><dt>Labels</dt><dd><ul class=\"labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<li class=\"add_label card_label\"></li></ul></dd></dl>"
    + ((stack1 = (helpers.detailSchedule || (depth0 && depth0.detailSchedule) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"detailSchedule","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<dl id=\"description\"><dt>Description <a href=\"#\">Edit</a></dt><dd>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</dd></dl><h5 id=\"add_comment\">Add Comment</h5><div id=\"textarea\"><textarea placeholder=\"Write a comment..\"></textarea></div><input type=\"button\" value=\"Save\"><h5 id=\"activity\">Activity</h5><ul id=\"comment\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></section><nav><h5>Add</h5><ul><li id=\"label\">Labels</li><li id=\"due\">Due Date</li></ul><h5>Actions</h5><ul><li id=\"move\">Move</li><li id=\"copy\">Copy</li><li id=\"subscribe\">Subscribe</li><li id=\"archive\">Archive</li></ul></nav></div><nav></nav>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li style=\"background: "
    + ((stack1 = (helpers.find_color || (depth0 && depth0.find_color) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.id : depth0),{"name":"find_color","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ";\"></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    return "<li class=\"description\"></li>";
},"6":function(container,depth0,helpers,partials,data) {
    return "<li class=\"comments\">2</li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<ul class=\"labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a href=\"#\" class=\"pencil\"></a><h4>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4><ul class=\"status\">";
  stack1 = ((helper = (helper = helpers.check_subscribe || (depth0 != null ? depth0.check_subscribe : depth0)) != null ? helper : alias2),(options={"name":"check_subscribe","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.check_subscribe) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = (helpers.scheduleStamp || (depth0 && depth0.scheduleStamp) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"scheduleStamp","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.description : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["change_label"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"back\"></a><a href=\"#\" class=\"close\"></a><h5>Change Label</h5><form action=\"#\" method=\"get\"><dl><dt><label>Name</label></dt><dd><input type=\"text\" name=\"title\"></dd></dl><dl><dt>Select a color</dt><dd><ul><li><label style=\"background: red;\"><input type=\"radio\" name=\"color\" value=\"red\"></label></li><li><label style=\"background: green;\"><input type=\"radio\" name=\"color\" value=\"green\"></label></li><li><label style=\"background: purple;\"><input type=\"radio\" name=\"color\" value=\"purple\"></label></li><li><label style=\"background: blue;\"><input type=\"radio\" name=\"color\" value=\"blue\"></label></li></ul></dd></dl><input type=\"submit\" value=\"Save\"><input type=\"button\" value=\"Delete\" class=\"delete\"></form>";
},"useData":true});

this["JST"]["edit_label"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li data-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\"><label style=\"background: "
    + alias2(alias1((depth0 != null ? depth0.colors : depth0), depth0))
    + ";\" data-color=\""
    + alias2(alias1((depth0 != null ? depth0.colors : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "<input type=\"checkbox\" "
    + ((stack1 = (helpers.checked_state || (depth0 && depth0.checked_state) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? depths[1].card : depths[1])) != null ? stack1.labels : stack1),(depth0 != null ? depth0.id : depth0),{"name":"checked_state","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></label><input class=\"label_change\" type=\"button\"></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<a href=\"#\" class=\"close\"></a><h5>Labels</h5><input type=\"text\" name=\"\" placeholder=\"Search labels...\"><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.existing_color : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a href=\"#\" class=\"new_label\">Create a new label</a><a href=\"#\">Show more labels</a><a href=\"#\">Enable color blind friendly mode</a>";
},"useData":true,"useDepths":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav><input type=\"button\" id=\"board\" value=\"Boards\"><input type=\"text\" id=\"search_card\"></nav><h1>Trello</h1><nav><input type=\"button\" id=\"add_board\"><input type=\"button\" id=\"information\"><input type=\"button\" id=\"notification\"><input type=\"button\" id=\"user\"></nav>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3> <a href=\"#\"></a><ol class=\"cards\"></ol><input type=\"button\" class=\"add_card\" value=\"Add a card...\">";
},"useData":true});

this["JST"]["move"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</option>";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<a href=\"#\" class=\"close\"></a><form action=\"/cards\" method=\"put\"><h5>Move Card</h5><select id=\"move_list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><select id=\"move_position\">"
    + ((stack1 = (helpers.generate_card_position || (depth0 && depth0.generate_card_position) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.activeList : depth0),{"name":"generate_card_position","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><input type=\"submit\" value=\"Move\"></form>";
},"useData":true});

this["JST"]["new_label"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"back\"></a><a href=\"#\" class=\"close\"></a><form action=\"#\" method=\"post\"><h5>Create Label</h5><dl><dt><label>Name</label></dt><dd><input type=\"text\" name=\"title\"></dd></dl><dl><dt>Select a color</dt><dd><ul><li><label style=\"background: red;\"><input type=\"radio\" name=\"colors\" value=\"red\"></label></li><li><label style=\"background: green;\"><input type=\"radio\" name=\"colors\" value=\"red\"></label></li><li><label style=\"background: purple;\"><input type=\"radio\" name=\"colors\" value=\"red\"></label></li><li><label style=\"background: blue;\"><input type=\"radio\" name=\"colors\" value=\"blue\"></label></li></ul></dd></dl><input type=\"submit\" value=\"Create\"></form>";
},"useData":true});