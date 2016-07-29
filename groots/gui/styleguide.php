<?php
$page = "Styleguide";
include 'includes/gui-head.php'; ?>

<section class="gui-banner">
    <div class="gui-banner__inner">
        <i class="gr-icon-groots-styleguide"></i>
        <p>A Styleguide is the primary visual DNA of your company’s branding.</p>
        <p>It is used to create a cohesive look across all web-based channels.</p>
    </div>
</section><!-- @end groots-info -->

<main class="gui-main">

    <!--Logo-->
    <div class="gui-item__header" name="logo">Logo</div>
    <div class="gui-item__showcase">
        <div class="gui-item__showcase-row">
            <div>
                <div class="gui-item__subtitle">Original</div>
                <div class="gui-item__showcase" style="padding: 1rem">
                    <img src="/dist/img/svg/groots-logo.svg" alt="Globalia" width="100" class="svg" />
                </div>
            </div>
            <div>
                <div class="gui-item__subtitle" name="icons">Reverse</div>
                <div class="gui-item__showcase" style="padding: 1rem;background: #ccc;">
                    <img src="/dist/img/svg/groots-logo.svg" alt="Globalia" width="100" class="svg" />
                </div>
            </div>
        </div>

    </div>

    <!--Colors-->
    <div class="gui-item__header" name="colors">Colors</div>
    <div class="gui-item__showcase">
        <?php include 'styleguide/colors.php' ?>
    </div>

    <!--Fonts-->
    <div class="gui-item__header" name="fonts">Grid</div>
    <div class="gui-item__showcase">
        <?php include 'styleguide/grid.php' ?>
    </div>

    <!--Fonts-->
    <div class="gui-item__header" name="fonts">Fonts</div>
    <div class="gui-item__showcase">
        <?php include 'styleguide/fonts.php' ?>
    </div>

    <!--Typography-->
    <div class="gui-item__header" name="typography">Typography</div>
    <div class="gui-item__showcase">
        <?php include 'styleguide/typography.php' ?>
    </div>

    <!--Forms-->
    <div class="gui-item__header" name="forms">Forms</div>
    <div class="gui-item__showcase">
        <?php include 'styleguide/forms.php' ?>
    </div>

    <!--User Interface-->
    <div class="gui-item__header">User Interface</div>
    <div class="gui-item__showcase">
        <div class="gui-item__showcase-row">
            <div>
                <div class="gui-item__subtitle" name="buttons">Buttons</div>
                <div class="gui-item__showcase" style="padding: 1rem;background: #ccc;">
                    <?php include 'styleguide/buttons.php' ?>
                </div>
            </div>
            <div>
                <div class="gui-item__subtitle" name="icons">Icons</div>
                <div class="gui-item__showcase" style="font-size: 2rem;">
                    <?php include 'styleguide/icons.php' ?>
                </div>
            </div>
            <div>
                <div class="gui-item__subtitle" name="socials">Socials</div>
                <div class="gui-item__showcase" style="padding: 1rem;background: #ccc;">
                    <?php include 'styleguide/socials.php' ?>
                </div>
            </div>
            <div>
                <div class="gui-item__subtitle" name="sharing">Sharing</div>
                <div class="gui-item__showcase">
                    <?php include 'styleguide/sharing.php' ?>
                </div>
            </div>
            <div>
                <div class="gui-item__subtitle" name="pagination">Pagination</div>
                <div class="gui-item__showcase">
                    <?php include 'styleguide/pagination.php' ?>
                </div>
            </div>
            <!--Breadcrumb-->
            <div>
                <div class="gui-item__subtitle" name="breadcrumb">Breadcrumb</div>
                <div class="gui-item__showcase">
                    <?php include 'styleguide/breadcrumb.php' ?>
                </div>
            </div>
            <!--Table-->
            <div>
                <div class="gui-item__subtitle" name="table">Table</div>
                <div class="gui-item__showcase">
                    <?php include 'styleguide/table.php' ?>
                </div>
            </div>
        </div>
    </div>
</main>

<?php include 'includes/gui-footer.php' ?>
