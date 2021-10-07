$(function () {
  $(document).ready(function($) {
$( "#accordion-lang1" ).accordion({
  active:0,
  collapsible: true,
  heightStyle: "content",
});
var active = $( "#accordion-lang1" ).accordion( "option", "active" );
 
// Setter
$( "accordion-lang__list" ).accordion( "option", "active", 0 );
});
});
