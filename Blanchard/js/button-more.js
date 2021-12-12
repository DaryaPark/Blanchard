jQuery(document).ready(function($){
    if($('.events__list').find('.events__item').length > 5){
    $('.btn-event-all').click(function(){
    $(this).prev().children('.events__item:nth-child(n+4)').slideToggle('');
    $(this).toggleClass('opnd_g');
    if($(this).hasClass('opnd_g')){
    $(this).html('Скрыть');}
    else {$(this).html('Все cобытия');}
    });
    }else{$('.btn-event-all').hide();}
    });