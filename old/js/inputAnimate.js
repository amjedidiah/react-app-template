//jS Document
$(document).ready(() => {
    
    $('.form-control').attr('placeholder', '');

    function stepOut(element) {

        element.parent().find('label').show().animate({
            top: '0px',
            paddingTop: '20px'
          }, 200);

        // console.log(element)
    }




    function stepIn(elem) {

        if(elem.val() === '')
        {
            elem.parent().find('label').show().animate({
                top: '48px',
                paddingTop: '0'
            }, 200);
        }

    }


    $('.cs3-animate .form-control').focusin(function() {
        stepOut($(this));
    });

    $('.cs3-animate .form-control').focusout(function() {
        stepIn($(this));
    });
    
    function bas() {
        
        var inputLength = $('.cs3-animate .form-control').length;
        
        for(i=0; i<inputLength; i++)
        {
            var ob = $('.cs3-animate .form-control').eq(i);
                
            if(ob.val() == '')
            {
                stepIn(ob);
            }
            else
            {
                stepOut(ob);
            }
        }
    }
    
    bas();

    
});
