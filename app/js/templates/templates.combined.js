this["HBS"] = this["HBS"] || {};
this["HBS"]["templates"] = this["HBS"]["templates"] || {};

this["HBS"]["templates"]["actionCapture"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    <!-- action components starts here -->\n<section id=\"join\" class=\"section section--join section--invert section--cta section--background-dark-grey\" data-background=\"dark-grey\" rel=\"join\">\n    <div class=\"inner\">\n        <div class=\"content\">\n       \n         <div class=\"action\">\n            <h2 data-short-title=\"Join\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.actionComponent : depth0)) != null ? stack1.heading : stack1), depth0))
    + "</h2>\n            <div class=\"txt\">\n                <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.actionComponent : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n                <a href=\"#\" class=\"btn btn--cta btn--join\" data-short-text=\"Join\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.actionComponent : depth0)) != null ? stack1.joinLabel : stack1), depth0))
    + "</a>\n            </div>\n        </div>\n        \n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.audienceComponent : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n\n    </div>\n</section>\n <!-- action components Ends here -->\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "         <!-- Capture components Ends here -->\n        <div class=\"Capture\">\n            <div class=\"txt txt--callus\">\n                <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audienceComponent : depth0)) != null ? stack1.callUslabel : stack1), depth0))
    + "</h3>\n                <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audienceComponent : depth0)) != null ? stack1.callUsDescription : stack1), depth0))
    + "</p>\n                <p class=\"phonenumber\">\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.callIcon : depth0)) != null ? stack1.filerefernce : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.callIcon : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.callIcon : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"/> \n                <a href=\"tel:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audienceComponent : depth0)) != null ? stack1.phoneNumberLink : stack1), depth0))
    + "\">\n                    \n                    "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audienceComponent : depth0)) != null ? stack1.phoneNumber : stack1), depth0))
    + "</a>\n                    </p>\n                <ul class=\"links\">\n                    <li><a href=\"#\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audienceComponent : depth0)) != null ? stack1.requestCallLink : stack1), depth0))
    + "</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"txt txt--emailme\">\n                <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audienceComponent : depth0)) != null ? stack1.emailSummary : stack1), depth0))
    + "</p>\n                <form name=\"emailme\" action=\"#\" method=\"get\">\n                <label for=\"email\" class=\"sr-only\">Email</label>\n                    <input type=\"email\" class=\"input--text input--email\" name=\"email\" placeholder=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audienceComponent : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\" id=\"email\">\n                    <button class=\"btn btn--submit btn--email\">\n                        <svg role=\"img\" class=\"icon icon--send\">\n                            <use xlink:href=\"#icn-arrow-right\"></use>\n                        </svg>\n                    </button>\n                </form>\n            </div>\n        </div>\n        <!-- Capture components Ends here -->\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<!-- Fallback components Ends here -->\n<section id=\"more\" class=\"section section--more section--invert section--background-dark-grey\" data-background=\"dark-grey\" rel=\"more\">\n    <div class=\"inner\">\n        <div class=\"content\">\n        <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.captureComponent : depth0)) != null ? stack1.heading : stack1), depth0))
    + "</h3>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.captureComponent : depth0)) != null ? stack1.results : stack1), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</section>\n<!-- Fallback components Ends here -->\n";
},"5":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <div class=\"col\">\n                <h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.heading : depth0), depth0))
    + "</h3>\n                <p>"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.actionComponent : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.captureComponent : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"useData":true});

this["HBS"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<footer>\n\n   here we go\n\n</footer>\n";
  },"useData":true});

this["HBS"]["templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header>\n    <button class=\"btn btn--menu btn--hamburger toggle-panel\" data-panel=\"menu\">\n				<!-- <svg role=\"img\" class=\"icon icon--menu\"><use xlink:href=\"#icn-menu\"></use></svg> -->\n                <span class=\"patty\"></span>\n                <span class=\"label\">Menu</span>\n	</button>\n\n    <a href=\"#\" class=\"logo\">\n        <svg role=\"img\"><title>Sunsuper</title><use xlink:href=\"#logo\"></use></svg>\n    </a>\n\n    <div class=\"buttons\">\n        <button class=\"btn btn--login toggle-panel\" data-panel=\"login\">\n					<svg role=\"img\" class=\"icon icon--login\"><use xlink:href=\"#icn-key\"></use></svg>\n					<span class=\"label\">Login</span>\n		</button>\n\n        <button class=\"btn btn--profile toggle-panel\" data-panel=\"profile\">\n					<svg role=\"img\" class=\"icon icon--profile\"><use xlink:href=\"#icn-face\"></use></svg>\n					<span class=\"label\">Profile</span>\n				</button>\n        <button class=\"btn btn--search toggle-panel\" data-panel=\"search\">\n               		<span class=\"label\">Search</span>\n                    <span class=\"icon\"></span>\n					<!-- <svg role=\"img\" class=\"icon icon--search\"><use xlink:href=\"#icn-search\"></use></svg> -->\n		</button>\n    </div>\n\n</header>\n";
  },"useData":true});

this["HBS"]["templates"]["inPageNavigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  },"useData":true});

this["HBS"]["templates"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "   <nav class=\"panel panel--menu panel--left bg-dark-grey menu-members-active\" id=\"panel-menu\" data-id=\"menu\">\n        	<div class=\"inner\">\n            	<div class=\"content\">\n                    <ul class=\"menu menu--top\">\n                        <li><a href=\"#\" rel=\"members\" class=\"active\">Members</a></li>\n                        <li><a href=\"#\" rel=\"employers\">Employers</a></li>\n                        <li><a href=\"#\" rel=\"advisers\">Advisers</a></li>\n                    </ul>\n                    \n                   <ul class=\"menu menu--sub menu--members\">\n                        <li class=\"menu__category\">Join</li>\n                        <li><a href=\"#\">Why Sunsuper</a></li>\n                        <li><a href=\"#\">Find &amp; Combine</a></li>\n                        <li class=\"menu__category\">Grow</li>\n                        <li><a href=\"#\">Investment Choices</a></li>\n                        <li><a href=\"#\">Add to Super</a></li>\n                        <li class=\"menu__category\">Protect</li>\n                        <li><a href=\"#\">Insurance</a></li>\n                        <li class=\"menu__category\">Manage</li>\n                        <li><a href=\"#\">Advice &amp; Planning</a></li>\n                        <li><a href=\"#\">Changing Jobs</a></li>\n                        <li><a href=\"#\">Retirement</a></li>\n                        <li class=\"menu__category\">Everyday</li>\n                        <li><a href=\"#\">Rewards</a></li>\n                        <li class=\"dreamproject\"><a href=\"#\"><img src=\"img/dreamproject.png\"></a></li>\n                    </ul>\n                    \n                    <ul class=\"menu menu--sub menu--employers\">\n                        <li><a href=\"#\">Why Sunsuper</a></li>\n                        <li><a href=\"#\">Employer Obligations</a></li>\n                        <li><a href=\"#\">Pay Super Online</a></li>\n                        <li><a href=\"#\">For Your Employees</a></li>\n                        <li class=\"dreamproject\"><a href=\"#\"><img src=\"img/dreamproject.png\"></a></li>\n                    </ul>\n                    \n                    <ul class=\"menu menu--sub menu--advisers\">\n                        <li><a href=\"#\">Why Sunsuper</a></li>\n                        <li><a href=\"#\">Product</a></li>\n                        <li><a href=\"#\">Advice Fees</a></li>\n                        <li><a href=\"#\">Manage Your Clients</a></li>\n                        <li class=\"dreamproject\"><a href=\"#\"><img src=\"img/dreamproject.png\"></a></li>\n                    </ul>\n        \n        		</div>\n        	</div>\n        </nav>";
  },"useData":true});

this["HBS"]["templates"]["sample-module"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"sample-module\"> \n"
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "\n</div>\n\n";
},"useData":true});

this["HBS"]["templates"]["text-image-carousel"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <h2 data-short-title=\""
    + escapeExpression(lambda((depth0 != null ? depth0.headingData : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.heading : depth0), depth0))
    + "</h2>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "            <div class=\"txt\">\n                ";
  stack1 = lambda((depth0 != null ? depth0.text : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "            <div class=\"txt txt--small\">\n                 ";
  stack1 = lambda((depth0 != null ? depth0.textSmall : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"href","hash":{},"data":data}) : helper)))
    + "\" target=\"_self\">"
    + escapeExpression(((helper = (helper = helpers.urlLabel || (depth0 != null ? depth0.urlLabel : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlLabel","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "            <div class=\"box box--"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + " box--"
    + escapeExpression(((helper = (helper = helpers.positon || (depth0 != null ? depth0.positon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"positon","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n            <img class=\"author--image\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.fileRefernce : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"/>\n                <span class=\"caption caption--short\">"
    + escapeExpression(((helper = (helper = helpers.shortDiscription || (depth0 != null ? depth0.shortDiscription : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"shortDiscription","hash":{},"data":data}) : helper)))
    + "</span>\n                <span class=\"caption caption--long\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.helptext || (depth0 != null ? depth0.helptext : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"helptext","hash":{},"data":data}) : helper)))
    + " <a href=\"content.html\">"
    + escapeExpression(((helper = (helper = helpers.linkLabel || (depth0 != null ? depth0.linkLabel : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkLabel","hash":{},"data":data}) : helper)))
    + "</a> "
    + escapeExpression(((helper = (helper = helpers.additionLabel || (depth0 != null ? depth0.additionLabel : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"additionLabel","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n";
},"10":function(depth0,helpers,partials,data) {
  return " box--active";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<section id=\"services\" class=\"section section--services section--background-"
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + " section--invert section--active\" rel=\"services\" data-background=\""
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\">\n     <div class=\"inner\">\n        <div class=\"content\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.heading : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.textSmall : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <ul class=\"links\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.link : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </ul>\n        </div>\n    </div> \n    <div class=\"graphic\">\n        <div class=\"boxes\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.boxes : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</section>\n";
},"useData":true});

this["HBS"]["templates"]["textImageTeaser"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <h2 data-short-title=\"Considering Joining\">"
    + escapeExpression(lambda((depth0 != null ? depth0.heading : depth0), depth0))
    + "</h2>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "            <div class=\"txt\">\n                ";
  stack1 = lambda((depth0 != null ? depth0.text : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "            <div class=\"txt txt--small\">\n                 ";
  stack1 = lambda((depth0 != null ? depth0.textSmall : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"href","hash":{},"data":data}) : helper)))
    + "\" target=\"_self\">"
    + escapeExpression(((helper = (helper = helpers.urlLabel || (depth0 != null ? depth0.urlLabel : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlLabel","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<section id=\"nonmember\" class=\"section section--nonmember section--background-"
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + " section--invert\" data-background=\""
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\" rel=\"nonmember\">\n    <div class=\"inner\">\n        <div class=\"content\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.heading : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.textSmall : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            \n            <ul class=\"links\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.link : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </ul>\n            \n        </div>\n    </div>\n    <div class=\"graphic graphic--circle-element\">\n        <div class=\"graphic__inner\">\n            <div class=\"graphic__element\">\n                <div class=\"image\" style=\"background-image:url("
    + escapeExpression(lambda((depth0 != null ? depth0.imgPath : depth0), depth0))
    + ");\">\n                    <span class=\"caption\"><b>"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</b><br>"
    + escapeExpression(((helper = (helper = helpers.place || (depth0 != null ? depth0.place : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"place","hash":{},"data":data}) : helper)))
    + "</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
},"useData":true});