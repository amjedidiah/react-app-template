<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Amaraegbu Jedidiah</title>

    <!-- Bootstrap CSS Online -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">

    <!-- Google Fonts -->
    <link href="//fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <!-- Emoji CSS -->
    <link href="//afeld.github.io/emoji-css/emoji.css" rel="stylesheet">


    <!-- Custom CSS -->
    <link rel="stylesheet" href="./css/index.css">

    <link rel="shortcut icon" href="./img/loko.ico" type="image/x-icon" />
</head>

<body>

  <div class='pos-f-t'>
    <div class="container-fluid collapse h-100 menu" id="navbarToggleExternalContent">
      <div class="row align-items-center h-100">
      <div class='col'>

        <button class="navbar-toggler menu-close" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>X</span>
        </button>

        <ul class="navbar-nav mr-auto">

          <li class="nav-item my-1">
            <a class="nav-link nav-link-portfolio" href="./portfolio">Portfolio</a>
          </li>
          <li class="nav-item my-1">
            <a class="nav-link nav-link-about" href="./about">About</a>
          </li>
          <li class="nav-item my-1">
            <a class="nav-link nav-link-contact" href="./contact">Contact</a>
          </li>
          <!--<li class="nav-item">
            <a class="nav-link" href="?p=diary">Diary</a>
          </li>-->
        </ul>

        <div class='social'>
          <a href='https://www.linkedin.com/in/am-jedidiah/' data-toggle="tooltip" title="LinkedIn Profile"><span class='fab fa-linkedin-in'></span></a>
          <a href='https://github.com/amjedidiah'><span class="fab fa-github"></span></a>
          <!-- <a href='https://www.instagram.com/am_jedidiah/' data-toggle="tooltip" title="Instagram Profile"><span class='fab fa-instagram'></span></a> -->
          <!--<a href='https://facebook.com/am.jedidiah' data-toggle="tooltip" title="Facebook Pofile"><span class='fab fa-facebook'></span></a>-->
          <!--<a href='#' data-toggle="tooltip" title="Share page"><span class='fas fa-share-alt'></span></a>
          <a href='#' data-toggle="tooltip" title="Like page"><span class='fas fa-thumbs-up'></span></a>-->
        </div>

      </div>
      </div>
    </div>

    <div class="container-fluid collapse h-100 form" id="requestToggle">
      <div class="row align-items-center h-100">
      <div class='col' id='wittr-2'>

        <button class="navbar-toggler form-close" type="button" data-toggle="collapse" data-target="#requestToggle" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>X</span>
        </button>

        <?php include('request.view.php');  ?>

      </div>
      </div>
    </div>

    <nav class="navbar navbar-light fixed-top" id='header'>
      <a class="navbar-brand" href="<?php

        if(isset($_GET['p']))   {
            print_r('./');
        }
        else
        {
            print_r("javascript:void(0)");
        }

      ?>">aj</a>
      <button class="d-none d-md-block navbar-toggler menu-open" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-toggle="tooltip" title="Menu">
        <span class='fa fa-ellipsis-h'></span>
      </button>
      <button class="d-md-none navbar-toggler menu-open" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        MENU
      </button>
    </nav>
  </div>
