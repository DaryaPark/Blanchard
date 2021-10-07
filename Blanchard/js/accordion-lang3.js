$(function () {
  $(document).ready(function($) {
$( "#accordion-lang3" ).accordion({
  active: 0,
  collapsible: true,
  heightStyle: "content",
});
var active = $( "#accordion-lang3" ).accordion( "option", "active" );
 
// Setter
$( "accordion-lang__list" ).accordion( "option", "active", 0 );
});
});
