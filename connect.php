<?php

	$link = mysqli_connect('localhost', 'root', '', 'portfolio');

    //$link = mysqli_connect('shareddb-i.hosting.stackcp.net', 'main-db-3337d3b2', 'zrlmm6ic1f', 'main-db-3337d3b2');

	if(mysqli_connect_error())
	{
		die("Could not connect to database!");
	}

?>
