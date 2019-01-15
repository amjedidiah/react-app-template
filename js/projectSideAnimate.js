//jS Document

$(document).ready(() => {
    
    $('.container-portfolio ul li').hover(function() {
        $(this).find('.rest-title').slideToggle('fast')
    }, function() {
        $(this).find('.rest-title').slideToggle('fast')
    });
    
});