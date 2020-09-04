//jS Document
    
    $('.navbar-brand').click(function(e) {
        
       if(window.location.pathname.length < 2) {

            e.preventDefault();
        } 
        
    });