<nav gr-nav gr-nav-effect="reveal-left" gr-nav-sticky="always" gr-nav-breakpoint="sm" class="demo-nav">
    <div gr-grid="container">
        <div class="demo-nav__nav-icon" gr-nav-trigger="squeeze"><img src="/dist/img/svg/nav-icon.svg" class="svg"></div>
        <a class="demo-nav__brand" href="layout.php"><img src="/dist/img/svg/groots-logo.svg" alt="Globalia" width="100" class="svg" /></a>
        <section class="demo-nav__panel" gr-nav-panel>
            <ul class="demo-nav__main">
                <li><a class="demo-nav__link<?php if(isset($_GET['l']) && $_GET['l']=='about-us'): ?> active<?php endif; ?>" href="layout.php?l=about-us">About Us</a></li>
                <li><a class="demo-nav__link<?php if(isset($_GET['l']) && $_GET['l']=='products'): ?> active<?php endif; ?>" href="layout.php?l=products">Products</a></li>
                <li><a class="demo-nav__link<?php if(isset($_GET['l']) && $_GET['l']=='services'): ?> active<?php endif; ?>" href="layout.php?l=services">Services</a></li>
                <li><a class="demo-nav__link<?php if(isset($_GET['l']) && $_GET['l']=='contact'): ?> active<?php endif; ?>" href="layout.php?l=contact">Contact</a></li>
            </ul>

            <ul class="demo-nav__top">
                <li>
                    <a class="demo-nav__link" href="#demo-login" gr-modal>Login</a>
                    <div id="demo-login" hidden>
                        <header class="h3">Login</header>
                        <form class="form" action="" data-parsley-validate novalidate gr-form>
                            <fieldset>
                                <div class="form-item" >
                                    <label for="exampleInputUser">Username</label>
                                    <input type="text" id="exampleInputText" placeholder="johndoe" required>
                                </div>
                                <div class="form-item">
                                    <label for="examplePassword">Password</label>
                                    <input type="password" id="examplePassword" placeholder="********" required>
                                </div>
                                <button class="btn--primary">Sign in</button>
                            </fieldset>
                        </form>
                    </div>
                </li>
                <li><a class="demo-nav__link" href="#">Sign up</a></li>
                <li><a class="demo-nav__link" href="#">Français</a></li>
            </ul>
        </section>
    </div>
</nav>
