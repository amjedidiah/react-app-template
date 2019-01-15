//JS Documnet

    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
 
    function goToGame(mode) {

        if(mode == 'click-around')
        {     
            myWindow = window.open('click-around.html', '_blank', '', '');   

        }

        if(mode == 'score-attack')
        {     
            myWindow = window.open('score-attack.html', '_blank', '', '');   
        }

        if(mode == 'time-attack')
        {     
            myWindow = window.open('time-attack.html', '_blank', '', '');   
        }
        
    }

    function showDetail(clickedId) {
        clickedIdInfo = clickedId+'-detail';

        showStatus = document.getElementById(clickedIdInfo).style.display;

        if(showStatus == 'none')
        {
            var info = document.getElementById('info-detail');
            var modes = document.getElementById('modes-detail');
            var credit = document.getElementById('credit-detail');

            if(info)
            {   
                info.style.display = 'none';
            }

            if(modes)
            {
                modes.style.display ='none';
            }

            if(credit)
            {
                credit.style.display = 'none';
            }


            document.getElementById(clickedIdInfo).style.display = 'block';
            document.getElementById(clickedIdInfo).style.borderTop = 'none';
            document.getElementById(clickedIdInfo).style.padding = '2%';
            document.getElementById(clickedId).style.padding = '3% 2%';

        }
        else
        {
            document.getElementById(clickedIdInfo).style.display = 'none';  
            document.getElementById(clickedId).style.padding = '2%';
        }

        
    }