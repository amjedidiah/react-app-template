<?php

    include('functions.php');
    include('views/header.view.php');

    $home = '';

    if(isset($_GET['p']))   {
        include("./views/".$_GET['p'].".view.php");
    }
    else
    {
        include('views/home.view.php');
    }

    include('views/footer.view.php');

?>
