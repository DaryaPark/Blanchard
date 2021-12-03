jQuery(document).ready(function($){
    if($('.events__list-container').find('.events__item-container').length > 3){
    $('.btn-event-all').click(function(){
        (this).prev().children('.events__item-container:nth-child(n+2)').slideToggle('');
    });
    }
    });