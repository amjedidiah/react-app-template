<?php

    include('./functions.php');

    $api_key = "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";
    

    // using SendGrid's PHP Library
    require("sendgrid-php/sendgrid-php.php");

    $email = new \SendGrid\Mail\Mail(); 
    $email->setFrom("test@example.com", "Example User");
    $email->setSubject("Sending with Twilio SendGrid is Fun");
    $email->addTo("imunacode@gmail.com", "Example User");
    $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
    $email->addContent(
        "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
    );
    $sendgrid = new \SendGrid(getenv('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'));
    try {
        $response = $sendgrid->send($email);
        print $response->statusCode() . "\n";
        print_r($response->headers());
        print $response->body() . "\n";
    } catch (Exception $e) {
        echo 'Caught exception: '. $e->getMessage() ."\n";
    }

?>
