var clickedTime;    var createdTime;    var reactionTime;   var i = 0;  var timings = new Array();  var bestTime;
		instruction = 'Test Your Reaction!!! Click on the shapes that appear as fast as you can to get a BEST TIME';
		alert(instruction);
		
        document.getElementById('timingReport').innerHTML = 'Current Time: 0s';
		document.getElementById('bestTiming').innerHTML = 'Best Time: 0s';

		function startGame() {

            if(document.getElementById('start').innerHTML == 'Start')
            {
				makeBox();
				
				document.getElementById('start').innerHTML = 'End';
            }
            else
            {
                document.getElementById('body').innerHTML = '<p>Thank you for playing this game</p><p> Your '+document.getElementById('bestTiming').innerHTML;
            }
        }

        document.getElementById('pause').onclick = function() {

            if(document.getElementById('pause').innerHTML == 'Pause')
            {
                document.getElementById('pause').innerHTML = 'Continue';
				
				clearTimeout(myBox);
            }
            else
            {
                document.getElementById('pause').innerHTML = 'Pause';
				
				makeBox();
            }
            
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

                createdTime = Date.now();

            },time) //Time here is in milliseconds
                
        }
        
        document.getElementById('box').onclick = function() {

            if(document.getElementById('pause').innerHTML == 'Pause')
            {
                clickedTime = Date.now();

                i++;

                reactionTime = (clickedTime-createdTime)/1000;
                reactionTimeExpression = reactionTime+' seconds';

                timings.push(reactionTime);

                Array.min = function(timings) {
                    return Math.min.apply(Math, timings);
                };

                bestTime = Array.min(timings);

                document.getElementById('timingReport').innerHTML = 'Current time: '+reactionTime+'s';
                document.getElementById('bestTiming').innerHTML = 'Best time: '+bestTime+'s';


                this.style.display = 'none';

                makeBox();
            }
            else
            {
                clickedTime = Date.now();

                i++;

                reactionTime = (clickedTime-createdTime)/1000;
                reactionTimeExpression = reactionTime+' seconds';

                timings.push(reactionTime);

                Array.min = function(timings) {
                    return Math.min.apply(Math, timings);
                };

                bestTime = Array.min(timings);

                


                this.style.display = 'block';
            }

            
        }
		
		



        //makeBox();

        window.addEventListener('resize', boxPosition, false)

    