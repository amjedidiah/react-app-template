//jS Document

$(document).ready(() => {
    
    function underliner(list_item) {
        $('.nav-link-'+list_item).html($('.nav-link-'+list_item).html() + '<span class="sr-only">(current)</span>');
        
        
        $('.nav-link-'+list_item).parent().addClass('active');
    }
    
    underliner(window.location.href.split("=")[1]); 
    
});