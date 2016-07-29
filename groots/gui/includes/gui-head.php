<?php $project_name = 'groots' ?>
<?php $path_public = '/dist' ?>

<!doctype html>
<!--[if IE]><html class="ie" lang=""><![endif]-->
<!--[if !IE]> --><html lang=""><!-- <![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>groots | globalia framework</title>

        <meta name="description" content="">
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <!-- CSS -->
        <link rel="stylesheet" href="<?= $path_public ?>/css/gui.min.css">
        <link rel="stylesheet" href="<?= $path_public ?>/css/<?= $project_name ?>.css">

        <!-- Favicons -->
        <link rel="apple-touch-icon" sizes="57x57" href="<?= $path_public ?>/favicons/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="<?= $path_public ?>/favicons/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="<?= $path_public ?>/favicons/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="<?= $path_public ?>/favicons/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="<?= $path_public ?>/favicons/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="<?= $path_public ?>/favicons/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="<?= $path_public ?>/favicons/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="<?= $path_public ?>/favicons/apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="<?= $path_public ?>/favicons/apple-touch-icon-180x180.png">
        <link rel="icon" type="image/png" href="<?= $path_public ?>/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="<?= $path_public ?>/favicons/android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="<?= $path_public ?>/favicons/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="<?= $path_public ?>/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="<?= $path_public ?>/favicons/manifest.json">
        <link rel="mask-icon" href="<?= $path_public ?>/favicons/safari-pinned-tab.svg" color="#000000">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="<?= $path_public ?>/favicons/mstile-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <!--Open Graph-->
        <meta property="og:locale" content="" />
        <meta property="og:type" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />

        <!--Twitter-->
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
    </head>
    <body gr-handler class="<?php echo (isset($special_class) ? $special_class : '') ?>">
        <?php include '../../groots/gui/includes/gui-nav.php' ?>
