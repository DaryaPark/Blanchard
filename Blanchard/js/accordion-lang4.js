$(function () {
  $(document).ready(function($) {
$( "#accordion-lang4" ).accordion({
  active: 0,
  collapsible: true,
  heightStyle: "content",
});
var active = $( "#accordion-lang4" ).accordion( "option", "active" );
 
// Setter
$( "accordion-lang__list" ).accordion( "option", "active", 0 );
});
});
