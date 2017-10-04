this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header class=\"header cf\"><ul class=\"leftnav\"><li><button>Boards</button></li><li><input type=\"text\" name=\"\"><span></span></li></ul><h1>Trello</h1><ul class=\"rightnav\"><li><button></button></li><li><button></button></li><li><button></button></li><li><button></button></li></ul></header><main><section class=\"dashboard\"><h2>Becoming a King</h2><button></button><button>Private</button><button>Show Menu</button></section><section class=\"lists\"><ol></ol><div class=\"add_list\">Add a list...</div></section></main>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<li><p><b>Chian Yee</b></p><p class=\"content\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p><pclass=\"info footer\">yesterday at 16:09<a href=\"#\">Edit</a><a href=\"#\">Delete</a></p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<section class=\"modal_cover\"></section><section class=\"card_detail\"><a class=\"close\" href=\"#\"></a><article><section><h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4><p class=\"info\">in list <a href=\"#\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a></p><p class=\"info\">Labels</p><ul class=\"labels\"></ul><p class=\"info\">Description <a href=\"#\">Edit</a></p><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p></section><section class=\"add_comment\"><form><h5>Add Comment</h5><textarea cols=\"60\" rows=\"5\"></textarea><input type=\"submit\" name=\"\" value=\"Save\"></form></section><section class=\"comment\"><h5>Activity</h5><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></section><p></p></article><nav><ul><li><h5>Add</h5></li><li class=\"button label\">Labels</li><li class=\"button due\">Due Date</li><li><h5>Actions</h5></li><li class=\"button move\">Move</li><li class=\"button copy\">Copy</li><li class=\"button subscribe\">Subscribe</li><li class=\"button archive\">Archive</li></ul></nav></section>";
},"useData":true});

this["JST"]["label"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><div class=\"color_block\" style=\"background: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + ";\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div><div class=\"edit_color\"></div></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"label_panel popout\"><h4>Labels</h4><a href=\"#\" class=\"close\"></a><input type=\"text\" class=\"search_label\"><ul class=\"label_choices\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.existing_colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a href=\"#\" class=\"new_label\">Create a new label</a><a href=\"#\">Enable color blind friendly mode.</a></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"card\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><ul class=\"labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><span class=\"pencil\"></span><h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4><ul class=\"status\">"
    + ((stack1 = (helpers.generateState || (depth0 && depth0.generateState) || alias2).call(alias1,depth0,{"name":"generateState","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></li>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li style=\"background: "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)))
    + ";\"></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"list\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><header class=\"cf\"><h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3><span class=\"menu\"></span></header><ol class=\"cards\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol><div class=\"add_card\">Add a card...</div></li>";
},"useData":true});

this["JST"]["new_label"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"create_label popout\"><h4>Create Label</h4><a href=\"#\" class=\"close\"></a><form method=\"post\" action=\"/colors\"> <label for=\"name_label\">Name</label><input type=\"text\" id=\"name_label\" name=\"title\"><label>Select a color</label><ul><li style=\"background-color: green\"><label><input type=\"radio\" name=\"color\" value=\"green\"><span></span></label></li><li style=\"background-color: red\"><label><input type=\"radio\" name=\"color\" value=\"red\"><span></span></label></li><li style=\"background-color: orange\"><label><input type=\"radio\" name=\"color\" value=\"orange\"><span></span></label></li><li style=\"background-color: blue\"><label><input type=\"radio\" name=\"color\" value=\"blue\"><span></span></label></li><li style=\"background-color: black\"><label><input type=\"radio\" name=\"color\" value=\"black\"><span></span></label></li><li style=\"background-color: purple\"><label><input type=\"radio\" name=\"color\" value=\"purple\"><span></span></label></li></ul><input type=\"submit\" value=\"Create\"></form></div>";
},"useData":true});