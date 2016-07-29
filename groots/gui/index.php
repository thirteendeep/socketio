<?php
$special_class = " homepage";
include 'includes/gui-head.php'; ?>

<main class="gui-banner--home">
    <div class="gui-banner--home__cover"
        gr-lazyloader
        gr-lazyloader-sm="/dist/img/demo/banner-sm.jpg"
        gr-lazyloader-md="/dist/img/demo/banner-md.jpg"
        gr-lazyloader-lg="/dist/img/demo/banner-lg.jpg">
        <img src="/dist/img/demo/banner-sm.jpg" alt="">
    </div>
    <div class="gui-banner--home__inner">
        <div class="logo">
            <a>
                <img src="/dist/img/svg/groots-logo.svg" alt="" class="svg">
            </a>
        </div>
        <div class="intro">
            <h1>the living visual identity<br/>of your company website</h1>
            <a href="styleguide.php" class="gui-btn">View Styleguide</a>
            <a href="components.php" class="gui-btn">View Components</a>
        </div>
    </div>
</main>

<?php include 'includes/gui-footer.php' ?>
