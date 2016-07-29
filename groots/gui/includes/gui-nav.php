<nav gr-nav gr-nav-effect="reveal-left" gr-nav-sticky="always" class="gui-nav">
    <button class="gui-nav__nav-icon" gr-nav-trigger="squeeze"><img src="/dist/img/svg/nav-icon.svg" class="svg"></button>
    <div class="gui-nav__nav-title"><?php echo (isset($page) ? $page : "Menu") ?></div>

    <section class="gui-nav__panel" gr-nav-panel>
        <ul class="gui-nav__main">
            <li>
                <a href="../" class="gui-nav__link gr-icon-groots-back">Back to website</a>
            </li>
            <li class="gui-nav__separator"></li>
            <li>
                <a class="gui-nav__link gr-icon-groots-styleguide" href="styleguide.php">Styleguide</a>

                <?php /*<ul>
                    <li><a class="gui-nav__link" href="styleguide.php#logo">Logo</a></li>
                    <li><a class="gui-nav__link" href="styleguide.php#colors">Colors</a></li>
                    <li><a class="gui-nav__link" href="styleguide.php#fonts">Fonts</a></li>
                    <li><a class="gui-nav__link" href="styleguide.php#typography">Typography</a></li>
                    <li><a class="gui-nav__link" href="styleguide.php#forms">Forms</a></li>
                    <?php
                        foreach (array_filter(glob('styleguide/*'), 'is_file') as $file) {
                            if(! in_array(pathinfo(basename($file), PATHINFO_FILENAME), array('logo','colors','fonts','typography','forms')) )
                            echo "<li><a class='groots-nav__link' href='styleguide.php#".pathinfo(basename($file), PATHINFO_FILENAME)."'>".pathinfo(basename($file), PATHINFO_FILENAME)."</a></li>";
                        }
                    ?>
                </ul> */ ?>
            </li>
            <li>
                <a class="gui-nav__link gr-icon-groots-components" href="components.php">Components</a>
                <?php /*<ul>
                    <li><a class="gui-nav__link" href="components.php#navigation">Navigation</a></li>
                    <?php
                        foreach (array_filter(glob('components/*'), 'is_file') as $file) {
                            if(! in_array(pathinfo(basename($file), PATHINFO_FILENAME), array('navigation')) )
                            echo "<li><a class='groots-nav__link' href='components.php#".pathinfo(basename($file), PATHINFO_FILENAME)."'>".pathinfo(basename($file), PATHINFO_FILENAME)."</a></li>";
                        }
                    ?>
                </ul> */ ?>
            </li>
            <?php /*
            <li class="gui-nav__separator"></li>
            <li><a class="gui-nav__link gr-icon-groots-codelines" href="http://groots.globaliadev.com/codelines.php" target="_blank">Codelines</a></li>
            <li><a class="gui-nav__link gr-icon-groots-docs" href="http://groots.globaliadev.com/docs.php" target="_blank">Documentation</a></li>
             */ ?>
             <li class="gui-nav__separator"></li>
             <li><a class="gui-nav__link gr-icon-angle-right" href="layout.php" target="_blank">Layout Demo/Theme</a></li>
             <li class="gui-nav__separator"></li>
        </ul>
    </section>
    <a class="gui-groots" href="/groots/"><img src="/dist/img/svg/groots-logo.svg" alt="groot" class="svg"></a> by <a class="gui-globalia" href="http://www.globalia.ca" target="_blank"><img src="/dist/img/svg/globalia-logo.svg" alt="Globalia" width="100" class="svg" /></a>
</nav>
