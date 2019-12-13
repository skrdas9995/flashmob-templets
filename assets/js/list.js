function createpost_show() {
  var element = document.getElementById("create_post");
   element.classList.remove("div_disable");
  var element = document.getElementById("dash_board");
    element.classList.add("div_disable");
 var element = document.getElementById("schudule_post");
    element.classList.add("div_disable");
 var element = document.getElementById("insights_post");
    element.classList.add("div_disable");
 var element = document.getElementById("remove_dashboard");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_schudulepost");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_insights");
    element.classList.remove("side_item_color");
  var element = document.getElementById("remove_createpost");
    element.classList.add("side_item_color");


}
function dashboard_show() {
  var element = document.getElementById("dash_board");
  element.classList.remove("div_disable");
  var element = document.getElementById("create_post");
    element.classList.add("div_disable");
 var element = document.getElementById("schudule_post");
    element.classList.add("div_disable");
 var element = document.getElementById("insights_post");
    element.classList.add("div_disable");
 var element = document.getElementById("remove_createpost");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_schudulepost");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_insights");
    element.classList.remove("side_item_color");
var element = document.getElementById("remove_dashboard");
    element.classList.add("side_item_color");
}
function schudulepost_show() {
  var element = document.getElementById("schudule_post");
  element.classList.remove("div_disable");
  var element = document.getElementById("create_post");
    element.classList.add("div_disable");
  var element = document.getElementById("dash_board");
    element.classList.add("div_disable");
  var element = document.getElementById("insights_post");
    element.classList.add("div_disable");
  var element = document.getElementById("remove_createpost");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_dashboard");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_insights");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_schudulepost");
    element.classList.add("side_item_color");
}
function insights_show() {
  var element = document.getElementById("insights_post");
  element.classList.remove("div_disable");
  var element = document.getElementById("create_post");
    element.classList.add("div_disable");
  var element = document.getElementById("dash_board");
    element.classList.add("div_disable");
  var element = document.getElementById("schudule_post");
    element.classList.add("div_disable");
var element = document.getElementById("remove_createpost");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_dashboard");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_schudulepost");
    element.classList.remove("side_item_color");
 var element = document.getElementById("remove_insights");
    element.classList.add("side_item_color");
}