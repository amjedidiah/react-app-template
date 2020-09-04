<?php 
    require 'vendor/autoload.php';
    use Mailgun\Mailgun;

    define('API_KEY', 'e5e4fb4e217796af69cb9237528d66a4-4167c382-0a4ef6b1');
    define('DOMAIN_NAME', 'sandboxc5c8b63482db4ceaa508576156070083.mailgun.org');

    // First, instantiate the SDK with your API credentials
    $mg = Mailgun::create(API_KEY); // For US servers
    
    
?>