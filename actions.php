<?php

    include('./functions.php');

    $api_key = "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";
    $message = "
    <html lang='en'>
				<head>
				    
				    <!-- Meta Tags -->
				    <meta charset='utf-8' />
				    <meta http-equiv='Content-type' content='text/html; charset=utf-8' />
				    <meta name='viewport' content='width=device-width, initial-scale=1' />
				    <meta name='description' content='' />
				    <meta name='keywords' content='' />
				    <meta name='author' content='' />

				    <!-- Title -->
				    <title> Portfolio Site | New Proposal </title>
				    
				    <!-- jQuery -->
				    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>

				    <!-- Latest compiled and minified BootStrap CSS -->
				    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'>

				    <!-- Latest compiled and minified BootStrapJavaScript -->
				    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossorigin='anonymous'></script>

				    <!-- Font Awesome -->
				    <script src='https://use.fontawesome.com/a0e8ab68c0.js'></script>
				    
				    <!-- Google Fonts -->
				    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
                    <link href='https://fonts.googleapis.com/css?family=Monsieur+La+Doulaise' rel='stylesheet'>
				    
				    <style>
                        
                        * {
                            color: #333;
                        }
                        
				    	body {
				    		background: #eeeeee;
				    	}

				    	#body {
				    		box-shadow: 1px 1px 10px #0f2ec5;
				    		margin-top: 20px;
				    		margin-bottom: 20px;
				    		background: #fff;
				    		border-top: 5px solid #0f2ec5;
						}
				    
				        * {
					       font-family: 'Montserrat', sans-serif;
				        }

				        #header {
				        	text-align: center;
				        	border-bottom: 1px solid #ccc;
				    	}
                        
                        #header img {
				        	margin: 20px auto;
                            width: 150px;
                            min-width: 100px;
				    	}
                        
                        #main {
                            padding-top: 25px;
                            padding-bottom: 25px;
                        }
                        
                        #footer {
                            border-top: 1px solid #ccc;
                            padding: 10px 0 5px 0;
                            text-align: center
                        }
                        
                        .social {
                            color: #0f2ec5;
                            margin-left: 10px;
                            margin-right: 10px
                        }
                        
                        .truly {
                            margin-top: 20px
                        }
                        
                        .sign {
                            font-family: 'Monsieur La Doulaise', cursive;
                            font-size: 200%
                        }
				        
				    </style>
				    
				    
				    
				</head>
				<body>
				    
				    <div class='container'>
                    <div class='row'>
                    <div class='col-xs-10 col-xs-offset-1' id='body'>
				        
				        <div class='row' id='header'>
                        <div class='col-xs-12'>
				            
                        </div>
				        </div>

				        <div class='row' id='main'>
                        <div class='col-xs-12'>
				        
					        <h4>Hello Jedidiah, </h4>
					        <p>I have a ".$_POST['option']." job for you.</p>
                            
                            <p>The details are as follows:<br />".$_POST['description']."</p>
                            
                            <h5 class='truly'>Yours truly,</h5>
                            <p> <span class='sign'>".$_POST['name']."</span><br />".$_POST['email']."</p>

                        </div>
					    </div>
				        
				    </div>
                    </div>
                    </div>

				    
				    
				</body>
				</html>
    ";
    // using SendGrid's PHP Library
    require("./sendgrid-php/sendgrid-php.php");
    $email = new \SendGrid\Mail\Mail();
    $email->setFrom("jobs@amjedidiah.com.ng", "Jobs");
    $email->setSubject("New Proposal: Portfolio Site");
    $email->addTo("imunacode@gmail.com", "Jedidiah Amaraegbu");
    $email->addContent(
        "text/plain", "and easy to do anywhere, even with PHP"
    );
    $email->addContent(
        "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
    );
    $sendgrid = new \SendGrid(getenv($api_key));

    try {
        $response = $sendgrid->send($email);
        print $response->statusCode() . "\n";
        print_r($response->headers());
        print $response->body() . "\n";
    } catch (Exception $e) {
        // echo 'Caught exception: ',  $e->getMessage(), "\n";
        print("error");
    }

?>
