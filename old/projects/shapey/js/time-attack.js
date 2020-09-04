//JS Document
		
		var instruction = "Test Your Reaction!!!How many clicks can you get before the clock runs out??";
		var clickedTime;	var endTime;	var makeTime;	var i=0;	var timeMax;
		
		alert(instruction);
		
		document.getElementById('timingReport').innerHTML = '0 clicks';
		
		
		function startGame(game_id) {
			document.getElementById('controls').innerHTML = "<div id='time'>00 : <span id='seconds'>30</span></div>";
			
			timeStart = Date.now();
			
			
			function showClock() {
				counter = setInterval(function() {
					
					timeNow = Date.now();
					
					timeCount = (timeNow - timeStart)/1000;
					timeCount = Math.floor(timeCount);
					timeCount = 30 - timeCount;
					
					if(timeCount != 0)
					{
						if(timeCount < 10)
						{
							document.getElementById('seconds').innerHTML = '0'+timeCount;
						}
						else{document.getElementById('seconds').innerHTML = timeCount;}
						
					}
					else
					{
						
					}
					
				}, 1000);
			}
				
			showClock();
			
			makeBox();
			
			makeTime = Date.now();
			
			}
		
		function randomColor() {
				var letters = '0123456789ABCDEF'.split('');
				var color = '#';
	
				for(var i=0; i<6; i++)
				{
					color += letters[Math.round(Math.random() * 15)];
				}
	
				return color;
				
			}
		
		function boxPosition() {
                var top = window.innerHeight;
                var boxHeight = document.getElementById('box').clientHeight;
                var container = document.getElementById('container').clientHeight;

                top = top - boxHeight - container - 100;

                var topp = Math.random();
                topp = top*topp;

                document.getElementById('box').style.top = topp+'px';


                var left = window.innerWidth;
                left = left - document.getElementById('box').clientWidth - 20;

                var leftt = Math.random();
                leftt = leftt*left;

                document.getElementById('box').style.left = leftt+'px';


        }
		
		function makeBox() {

            var time = Math.random();

            if(time > 0.5)
            {
				bWidth = window.innerWidth;
                bRadius = bWidth/2;
                bRadius = bRadius+'px';

                document.getElementById('box').style.borderRadius = bRadius;
            }
            else
            {
                document.getElementById('box').style.borderRadius = '0px';   
            }
			
			time = time*10;
			
	
				myBox = setTimeout(function() {

					document.getElementById('box').style.background = randomColor();     
	
					document.getElementById('timingReport').style.background = document.getElementById('box').style.background;
	
					document.getElementById('box').style.display = 'block';
	
					bWidth = document.getElementById('box').clientWidth;
					bHeight = bWidth+'px';
	
					document.getElementById('box').style.height = bHeight;
	
					boxPosition();
	
	
				},time) //Time here is in milliseconds
			    
        	}
			
			document.getElementById('box').onclick = function() {

                i++;
				
				clickedTime = Date.now();
             	endTime = (clickedTime-makeTime)/1000;

				if(i == 1)
				{
					document.getElementById('timingReport').innerHTML = i+' click  ';
				}
				else
				{
					document.getElementById('timingReport').innerHTML = i+' clicks';
				}

                this.style.display = 'none';

				if(endTime < 30)
				{
					makeBox();
				}
				else
				{
					document.getElementById('body').innerHTML = '<p>Thank you for playing this game</p><p> You have '+document.getElementById('timingReport').innerHTML+' in 30 seconds';
				}
                
		}
		
		
		
		
		
		
	