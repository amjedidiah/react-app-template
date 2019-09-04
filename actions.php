<?php

    include('./functions.php');

    require 'vendor/autoload.php';
    use Mailgun\Mailgun;
    # Instantiate the client.
    $mgClient = new Mailgun('e5e4fb4e217796af69cb9237528d66a4-4167c382-0a4ef6b1');
    $domain = "sandboxc5c8b63482db4ceaa508576156070083.mailgun.org	";
    # Make the call to the client.
    $result = $mgClient->sendMessage($domain, array(
        'from'	=> 'Excited User <hello@sandboxc5c8b63482db4ceaa508576156070083.mailgun.org>',
        'to'	=> 'Baz <imunacode@gmail.com>',
        'subject' => 'Hello',
        'text'	=> 'Testing some Mailgun awesomness!'
    ));

?>
