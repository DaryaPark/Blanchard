(function() {
  $('.itemsMenu>a').click(function() {
    $('.itemsMenu>a').removeClass('active');
    if ($(this).next('.dropMenu').css("display") == "none") {
      $('.dropMenu').hide('normal');
      $(this).next('.dropMenu').toggle('normal');
      $('.itemsMenu>a').removeClass('active');
      $(this).toggleClass('active');
    } else $('.dropMenu').hide('normal');
    return false;
  });
});