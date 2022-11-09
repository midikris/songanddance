<?php 
//Song and Dance Landing Page

$root_url =  $_SERVER["REQUEST_SCHEME"] . "://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];

?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>The Song and Dance</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="preload" href="img/curtain_left.jpg" as="image">
        <link rel="preload" href="img/curtain_right.jpg" as="image">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <meta property="og:title" content="The Song and Dance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="<?php echo filter_var($root_url, FILTER_SANITIZE_URL); ?>" />
        <meta property="og:image" content="<?php echo filter_var($root_url, FILTER_SANITIZE_URL) ?>img/1200_630.jpg" />
        <meta property="og:description" content="The Song and Dance is about music and gifs followed by the comedy that ensues." />
  
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6NYJRJYBBP"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6NYJRJYBBP',{ 'debug_mode':true });
        </script>
    </head>
    <body>
        <div class="container">

          <div id="player" class="youtube" style="position: absolute;left:0;top:0"></div>

          <h1>The Song and Dance</h1>
          <h2 class="title"></h2>

          <form class="form" action="" method="post">
            <input class="youtube_id" type="input" name="youtube" value="https://www.youtube.com/watch?v=YW0sxgYAmLM">
            <button type="button" name="button">Let's Dance!</button>
          </form>

          <div class="stage black-and-white">
            <div class="left-curtain">
              <div class="giphy-logo-left">
                <a href="https://giphy.com" target="_blank">
                  <img src="img/powered_by_giphy_left.png" alt="Giphy Logo">
                </a>
              </div>
            </div>
            <div class="right-curtain">
              <div class="giphy-logo-right">
                <a href="https://giphy.com" target="_blank">
                  <img src="img/powered_by_giphy_right.png" alt="">
                </a>
              </div>
            </div>
          </div>

          <div class="dancing-swag">
            <div class="dancing-man-wrapper" style="background-image:url(https://media.giphy.com/media/2oeyTMKbIZsHK/giphy.gif);">
              <img class="dancing-man-wrapper-image" src="https://media.giphy.com/media/2oeyTMKbIZsHK/giphy.gif" alt="" width="100%"/>
            </div>
          </div>

          <div class="wait-for-it"></div>

          <div class="vinyl-record">
            <img src="img/record.svg" alt="">
          </div>

          <div class=modal>
            <div class="modal-content">
              <div class="modal-header">
                <span class="modal-close">&times;</span>
                <h2>Share this Song and Dance</h2>
              </div>
              <div class="modal-body">
                <p class="modal-body-featured-artist"></p>
                <p class="modal-body-share-url"></p>
              </div>
            </div>
          </div>
          
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
        <script src="js/main.js"></script>

      </body>
</html>
