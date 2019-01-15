//jS Document
$(document).ready(() => {
    
    $('.container-portfolio .project:nth-child(1) .p-item').slideToggle();  //Very important code to prevent the big letter of the first project from disappearing
    
    $('.project-nav li a').click(function(e) {
    
        e.preventDefault();
        
        var pComeIn = $(this).attr('href');
        animateProject(pComeIn, $(this));
        
    });
    
    
    
    
    $(document).keydown(function(e) {
        
        var key = event.which || event.keyCode;
        prevNext(key);
        
    });
    
    
    
    
    $(function() {
        $('.project-house').swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            
            if(direction == 'up')
            {
                key = 40;
            } else if(direction == 'down') {
                key = 38;
            }
            prevNext(key);
        }
      });
    });
    
    
    
    
    function getProjects() {
        var pArray = new Array();
    
        for(i=0;i<$('.container-portfolio .project').length;i++)
        {
            pArray.push($('.container-portfolio .project').eq(i).attr('id'));
        }

        return pArray
    }
    
    
    
    
    function prevNext(key, pArray) {
        
        pArray = getProjects();
        pPres = $('.container-portfolio .project:visible').attr('id');
        
        var pPresNumber = pArray.indexOf(pPres);

        if(key == 38 || key == 40)
        {
            if(key == 40) {
                if(pPresNumber == 3)
                {
                    pPresNumber=0;
                } else {
                    pPresNumber++
                }
            }

            if(key == 38) {
                if(pPresNumber == 0)
                {
                    pPresNumber=3;
                } else {
                    pPresNumber--
                }
            }

            animateProject('#'+pArray[pPresNumber], $("a[href='#" + pArray[pPresNumber] + "']"))
        }
        
    }
    
    
    
    
    function animateProject(pComeIn, pLink) {
        
        pPres = $('.project-nav li a.active').attr('href');
        
        if(pPres != pComeIn) {
            
            $('.project-nav li a').removeClass('active');
            
            pLink.addClass('active');
            
            $(pPres).find('.p-item').slideToggle();
            $(pPres).animate({
                'left': '-105%'
            }, 500).slideToggle('fast', function() {
                $(pComeIn).slideToggle('fast').css('display', 'flex').animate({
                    'left': '0%'
                }, 500, function() {
                    $(pPres).find('.p-item').slideToggle();
                });
            });
            
            pPres = pComeIn;
        }
        
    }
    
    
    
    
    
});