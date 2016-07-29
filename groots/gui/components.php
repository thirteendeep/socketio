<?php
$page = "Components";
include 'includes/gui-head.php'; ?>

<section class="gui-banner">
    <div class="gui-banner__inner">
        <i class="gr-icon-groots-components"></i>
        <p>Components are reusable pieces of code designed to be scalable.</p>
    </div>
</section><!-- @end groots-info -->

<main class="gui-main">
    <div class="gui-item__header" id="navigation">Navigation</div>
    <div class="gui-item__showcase gui-item__showcase--full gui-item__showcase--frame" gr-handler style="background: #ccc;">
        <?php include 'components/navigation.php' ?>
    </div>

    <div class="gui-item__header" id="banner">Banner</div>
    <div class="gui-item__showcase gui-item__showcase--full">
        <?php include 'components/banner.php' ?>
    </div>

    <div class="gui-item__header">Cards (with Equalizer)</div>
    <div class="gui-item__showcase">
        <?php include 'components/cards.php' ?>
    </div>

    <div class="gui-item__header">Listing (with Lazy-loading)</div>
    <div class="gui-item__showcase">
        <?php include 'components/listing.php' ?>
    </div>

    <div class="gui-item__header">Modal</div>
    <div class="gui-item__showcase">
        <a href="#demo-modal" gr-modal class="btn--primary">open modal</a>
        <div id="demo-modal">
            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
        </div>
    </div>

    <div class="gui-item__header">Grid Expander</div>
    <div class="gui-item__showcase">
        <?php include 'components/grid-expander.php' ?>
    </div>

    <div class="gui-item__header">Embeded Google Map</div>
    <div class="gui-item__showcase gui-item__showcase--full">
        <div gr-googlemap class="demo-map" id="map" gr-googlemap-lat="45.502834" gr-googlemap-lng="-73.513764" gr-googlemap-title="Globalia" gr-googlemap-pin="/dist/img/demo/google-map-pin.png"></div>
    </div>

    <!--User Interface-->
    <div class="gui-item__header" id="video_players">Video players <small>(using vendor: <a href="https://plyr.io" target="_blank">Plyr</a>)</small></div>
    <div class="gui-item__showcase">
        <div class="gui-item__showcase-row">
            <div>
                <div class="gui-item__subtitle" id="youtube-player">Youtube</div>
                <div gr-video data-video-id="BBGEG21CGo0" data-type="youtube"></div>
            </div>
            <div>
                <div class="gui-item__subtitle" id="vimeo-player">Vimeo</div>
                <div gr-video data-video-id="153983096" data-type="vimeo"></div>
            </div>
        </div>
    </div>
</main>

<?php include 'includes/gui-footer.php' ?>
