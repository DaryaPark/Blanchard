$(function () {
    
  document.getElementById('hider').onclick = function() {
    document.getElementById('button').hidden = true;
  }
    $(document).ready(function($) {
  $( "#accordion-events" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
  });
  });
  });
