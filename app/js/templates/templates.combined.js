this["HBS"] = this["HBS"] || {};
this["HBS"]["templates"] = this["HBS"]["templates"] || {};

this["HBS"]["templates"]["sample-module"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"sample-module\"> \n"
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "\n</div>\n\n";
},"useData":true});