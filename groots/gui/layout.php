<?php $project_name = 'groots' ?>
<?php $path_public = '/dist' ?>

<!doctype html>
<html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>groots | globalia framework</title>

        <meta name="description" content="">
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <!-- CSS -->
        <link rel="stylesheet" href="<?php echo (isset($project_name) ? "/dist/css/".$project_name : '/groots/groots') ?>.css">

        <!-- Favicons -->
        <link rel="apple-touch-icon" sizes="57x57" href="/dist/favicons/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/dist/favicons/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/dist/favicons/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/dist/favicons/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/dist/favicons/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/dist/favicons/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/dist/favicons/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/dist/favicons/apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/dist/favicons/apple-touch-icon-180x180.png">
        <link rel="icon" type="image/png" href="/dist/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/dist/favicons/android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="/dist/favicons/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="/dist/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/dist/favicons/manifest.json">
        <link rel="mask-icon" href="/dist/favicons/safari-pinned-tab.svg" color="#000000">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/dist/favicons/mstile-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <!--  Essential Social META Tags -->
        <meta property="og:title" content="groots by Globalia">
        <meta property="og:description" content="The living visual identity<br/>of your company website">
        <meta property="og:image" content="">
        <meta property="og:url" content="">
        <meta name="twitter:card" content="summary_large_image">
        <!--  Non-Essential, But Recommended -->
        <meta name="og:site_name" content="groots by Globalia">
        <meta name="twitter:image:alt" content="">
        <!--  Non-Essential, But Required for Analytics -->
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@website-username">

    </head>
    <body gr-handler>

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
                <!--ul class="demo-nav__tools">
                    <li>
                        <form action="" class="form" data-parsley-validate novalidate gr-form>
                            <div class="form-item--icon-after">
                                <input type="search" id="exampleInputSearch" placeholder="Search" required>
                                <i class="icon gr-icon-search"></i>
                            </div>
                        </form>
                    </li>
                </ul-->
            </div>
        </nav>


        <?php if(isset($_GET['l'])):
            switch ($_GET['l']) {
                case 'about-us':
                    $cover_id = 7;
                    break;
                case 'products':
                    $cover_id = 6;
                    break;
                case 'services':
                    $cover_id = 4;
                    break;
                default:
                    $cover_id = 579;
                    break;
            }
        ?>
            <section class="demo-topbanner">
                <div class="demo-topbanner__cover" gr-lazyloader
                    gr-lazyloader-sm="https://unsplash.it/768/432/?image=<?php echo $cover_id; ?>"
                    gr-lazyloader-md="https://unsplash.it/1024/576?image=<?php echo $cover_id; ?>"
                    gr-lazyloader-lg="https://unsplash.it/1280/720?image=<?php echo $cover_id; ?>">
                    <img src="https://unsplash.it/480/270/?image=<?php echo $cover_id; ?>" alt="">
                </div>
                <div class="demo-topbanner__inner">
                    <div class="typography">
                        <h1 class="h1">Layout Showcase</h1>
                        <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque.</p>
                        <a href="#main" class="btn--ghost">Scroll to content</a>
                    </div>
                </div>
            </section>

        <?php else: ?>

            <section class="demo-banner">
                <div class="demo-banner__cover" gr-lazyloader gr-video-bg gr-video-bg-breakpoint="md" gr-video-bg-youtube="4he-oX6B-Kw"><img src="/dist/img/demo/clouds-video-bg-cover.png" alt=""></div>
                <div class="demo-banner__inner">
                    <div class="typography">
                        <h1 class="h1">Hi, i'm groots</h1>
                        <p>This "website" is a boilerplate for Globalia's built-in projects.</p>
                        <p>It showcases differents layouts (page) powered by groots' components and styleguide.</p>
                        <a href="#main" class="btn--ghost">Show me more</a>
                    </div>
                </div>
            </section>

        <?php endif; ?>

        <main name="main" class="demo-main">

        <?php if(isset($_GET['l']) && $_GET['l']=='contact'): ?>

            <section class="demo-section" gr-grid="container--fluid">
                <header class="demo-header typography">
                    <h2>Contact</h2>
                    <p>Neque aptent a pharetra ligula risus ligula dolor eu vel</p>
                </header>
                <div gr-grid="row">
                    <div gr-grid="sm-6 sm-offset-3">

                        <form class="form" action="" data-parsley-validate novalidate gr-form>
                            <fieldset>
                                <div class="form-item" >
                                    <label for="exampleInputText">Name</label>
                                    <input type="text" id="exampleInputText" placeholder="John Doe" required>
                                </div>
                                <div class="form-item">
                                    <label for="exampleInputEmail">Email address</label>
                                    <input type="email" id="exampleInputEmail" placeholder="john@doe.com" required>
                                </div>
                                <div class="form-item">
                                    <label for="exampleSelect">Occupation</label>
                                    <select id="exampleSelect" required>
                                        <option disabled selected value="hide">Select ...</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                        <option value="4">Option 4</option>
                                    </select>
                                </div>
                                <div class="form-item">
                                    <input type="checkbox" name="rememberme" id="rememberme" required>
                                    <label for="rememberme">Opt-in Legal</label>
                                </div>
                                <button class="btn--primary">Subscribe</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>

            <div class="demo-map" gr-googlemap></div>

        <?php elseif(isset($_GET['l']) && $_GET['l']=='about-us'): ?>

            <secion class="demo-section" gr-grid="container">
                <header class="demo-header typography">
                    <h2>Expander</h2>
                    <p>Neque aptent a pharetra ligula risus ligula dolor eu vel</p>
                </header>
                <div gr-grid="row">
                    <div gr-grid="sm-10 sm-offset-1" class="typography">
                        <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                    </div>
                </div>
            </secion>
            <secion class="demo-expandable" gr-grid="container--fluid">
                <div gr-grid="row--block xs-3 sm-5 collapse">
                    <div gr-grid="block" gr-expander>
                        <img src="/dist/img/demo/avatars/stormtrooper.jpg" alt="" class="expander__trigger">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img class="expander__trigger" src="/dist/img/demo/avatars/bobafett.jpg" alt="">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img src="/dist/img/demo/avatars/stormtrooper.jpg" alt="" class="expander__trigger">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img class="expander__trigger" src="/dist/img/demo/avatars/bobafett.jpg" alt="">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img src="/dist/img/demo/avatars/stormtrooper.jpg" alt="" class="expander__trigger">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img class="expander__trigger" src="/dist/img/demo/avatars/bobafett.jpg" alt="">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img src="/dist/img/demo/avatars/stormtrooper.jpg" alt="" class="expander__trigger">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img class="expander__trigger" src="/dist/img/demo/avatars/bobafett.jpg" alt="">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img src="/dist/img/demo/avatars/stormtrooper.jpg" alt="" class="expander__trigger">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        </div>
                    </div>
                    <div gr-grid="block" gr-expander>
                        <img class="expander__trigger" src="/dist/img/demo/avatars/bobafett.jpg" alt="">
                        <div class="expander__content" gr-grid="container">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                        </div>
                    </div>
                </div>
            </secion>

            <section class="demo-section" gr-grid="container">
                <div gr-grid="row">
                    <div gr-grid="sm-10 sm-offset-1" class="typography">
                        <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                    </div>
                </div>
                <div gr-grid="row--block sm-2 sm-offset-1">
                    <div gr-grid="block" class="typography">
                        <ul>
                            <li>Imperdiet pharetra suspendisse ac est sit condimentum parturient</li>
                            <li>Metus praesent elit faucibus a pharetra nam fringilla scelerisque facilisis netus ac sociis</li>
                            <li>Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad.</li>
                            <li>Risus suspendisse senectus dictum convallis</li>
                            <li>Facilisis netus ac sociis a eros eget dui proin ad sed fermentum</li>
                            <li>Pharetra nam fringilla</li>
                            <li>Imperdiet pharetra suspendisse ac est sit condimentum parturient</li>
                            <li>Metus praesent elit faucibus a pharetra nam fringilla scelerisque</li>
                            <li>Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad.</li>
                            <li>Risus suspendisse senectus dictum convallis</li>
                            <li>Facilisis netus ac sociis a eros eget dui proin ad sed fermentum</li>
                            <li>Pharetra nam fringilla</li>
                        </ul>
                    </div>
                    <div gr-grid="block" class="typography">
                        <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        <div gr-video data-video-id="153983096" data-type="vimeo"></div>
                    </div>
                </div>
            </section>

            <secion class="demo-halfbanner">
                <div class="demo-halfbanner__cover" gr-lazyloader
                    gr-lazyloader-sm="https://unsplash.it/768/432/?image=579"
                    gr-lazyloader-md="https://unsplash.it/1024/576?image=579"
                    gr-lazyloader-lg="https://unsplash.it/1280/720?image=579">
                    <img src="https://unsplash.it/480/270/?image=579" alt="">
                </div>
                <div class="demo-halfbanner__inner">
                    <div class="typography">
                        <div class="h2">Join Us</div>
                        <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus.</p>
                        <a href="layout.php?l=contact" class="btn--ghost">Apply now</a>
                    </div>
                </div>
            </secion>

        <?php elseif(isset($_GET['l']) && $_GET['l']=='products'): ?>

            <section class="demo-section demo-cards" gr-grid="container">
                <header class="demo-header typography">
                    <h2>Cards</h2>
                </header>
                <div gr-grid="row--block sm-4" gr-equalizer gr-equalizer-breakpoint="sm" gr-equalizer-target=".typography">
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=759"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=759"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=759">
                                <img src="https://unsplash.it/480/270/?image=759" alt="">
                            </div>
                            <div class="typography">
                                <p>Venenatis integer conubia</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=791"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=791"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=791">
                                <img src="https://unsplash.it/480/270/?image=791" alt="">
                            </div>
                            <div class="typography">
                                <p>Natoque lacus nisl molestie ullamcorper eu a malesuada arcu.</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=820"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=820"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=820">
                                <img src="https://unsplash.it/480/270/?image=820" alt="">
                            </div>
                            <div class="typography">
                                <p>Varius adipiscing phasellus adipiscing habitasse cursus mus nam nec interdum integer nulla mollis.</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=861"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=861"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=861">
                                <img src="https://unsplash.it/480/270/?image=861" alt="">
                            </div>
                            <div class="typography">
                                <p>Bibendum et fringilla a montes.</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=974"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=974"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=974">
                                <img src="https://unsplash.it/480/270/?image=974" alt="">
                            </div>
                            <div class="typography">
                                <p>Natoque lacus nisl molestie ullamcorper eu a malesuada arcu.</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=998"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=998"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=998">
                                <img src="https://unsplash.it/480/270/?image=998" alt="">
                            </div>
                            <div class="typography">
                                <p>Varius adipiscing phasellus adipiscing habitasse cursus mus nam nec interdum integer nulla mollis.</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=1051"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=1051"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=1051">
                                <img src="https://unsplash.it/480/270/?image=1051" alt="">
                            </div>
                            <div class="typography">
                                <p>Venenatis integer conubia</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="demo-card">
                            <div class="demo-card__figure" gr-lazyloader
                                gr-lazyloader-sm="https://unsplash.it/768/432/?image=802"
                                gr-lazyloader-md="https://unsplash.it/1024/576?image=802"
                                gr-lazyloader-lg="https://unsplash.it/1280/720?image=802">
                                <img src="https://unsplash.it/480/270/?image=802" alt="">
                            </div>
                            <div class="typography">
                                <p>Bibendum et fringilla a montes.</p>
                            </div>
                            <div class="demo-card__footer">
                                <a href="layout.php?l=single" class="btn--primary">View detail</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div gr-grid="row--block">
                    <nav class="demo-pagination" gr-grid="block">
                        <hr>
                        <a href="#" class="pagination__btn--prev pagination__btn--disabled"></a>
                        <span class="pagination__link--current">1</span>
                        <a href="#" class="pagination__link">2</a>
                        <a href="#" class="pagination__link">3</a>
                        <span class="pagination__link--disabled">...</span>
                        <a href="#" class="pagination__link">20</a>
                        <a href="#" class="pagination__btn--next"></a>
                    </nav>
                </div>
            </section>

        <?php elseif(isset($_GET['l']) && $_GET['l']=='services'): ?>

            <section class="demo-section demo-listing" gr-grid="container">
                <header class="demo-header typography">
                    <h2>Listing</h2>
                    <p>Neque aptent a pharetra ligula risus ligula dolor eu vel</p>
                </header>
                <div gr-grid="row--block sm-2 sm-offset-1">
                    <div gr-grid="block" gr-lazyloader
                        gr-lazyloader-sm="https://unsplash.it/768/432/?image=649"
                        gr-lazyloader-md="https://unsplash.it/1024/576?image=649"
                        gr-lazyloader-lg="https://unsplash.it/1280/720?image=649">
                        <img src="https://unsplash.it/480/270/?image=649" alt="">
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h2 class="h3">Layout Showcase</h2>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam.</p>
                            <a href="layout.php?l=single" class="btn--primary">View detail</a>
                        </div>
                    </div>
                </div>
                <div gr-grid="row--block sm-2 sm-offset-1">
                    <div gr-grid="block" gr-lazyloader
                        gr-lazyloader-sm="https://unsplash.it/768/432/?image=653"
                        gr-lazyloader-md="https://unsplash.it/1024/576?image=653"
                        gr-lazyloader-lg="https://unsplash.it/1280/720?image=653">
                        <img src="https://unsplash.it/480/270/?image=653" alt="">
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h2 class="h3">Layout Showcase</h2>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                            <a href="layout.php?l=single" class="btn--primary">View detail</a>
                        </div>
                    </div>
                </div>
                <div gr-grid="row--block sm-2 sm-offset-1">
                    <div gr-grid="block" gr-lazyloader
                        gr-lazyloader-sm="https://unsplash.it/768/432/?image=651"
                        gr-lazyloader-md="https://unsplash.it/1024/576?image=651"
                        gr-lazyloader-lg="https://unsplash.it/1280/720?image=651">
                        <img src="https://unsplash.it/480/270/?image=651" alt="">
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h2 class="h3">Layout Showcase</h2>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam.</p>
                            <a href="layout.php?l=single" class="btn--primary">View detail</a>
                        </div>
                    </div>
                </div>
                    <nav class="demo-pagination" gr-grid="block">
                        <hr>
                        <a href="#" class="pagination__btn--prev pagination__btn--disabled"></a>
                        <span class="pagination__link--current">1</span>
                        <a href="#" class="pagination__link">2</a>
                        <a href="#" class="pagination__link">3</a>
                        <span class="pagination__link--disabled">...</span>
                        <a href="#" class="pagination__link">20</a>
                        <a href="#" class="pagination__btn--next"></a>
                    </nav>
                </div>
            </section>

        <?php elseif(isset($_GET['l']) && $_GET['l']=='single'): ?>

            <article class="demo-section demo-post" gr-grid="container">
                <div gr-grid="row--block sm-1 sm-offset-1">
                    <div gr-grid="block">
                        <header class="typography">
                            <h2>Article</h2>
                            <p class="h3">Neque aptent a pharetra ligula risus ligula dolor eu vel</p>
                        </header>
                        <div class="typography">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                            <p>Varius adipiscing phasellus adipiscing habitasse cursus mus nam nec interdum integer nulla mollis ornare quisque montes a diam parturient. Penatibus a faucibus ultrices ut congue suspendisse at imperdiet nec primis felis ac gravida cras iaculis.</p>
                            <p>Varius adipiscing phasellus adipiscing habitasse cursus mus nam nec interdum integer nulla mollis ornare quisque montes a diam parturient. Penatibus a faucibus ultrices ut congue suspendisse at imperdiet nec primis felis ac gravida cras iaculis.</p>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        </div>
                        <hr>
                        <?php
                        $current_url = "//$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                        ?>
                        <div class="social-icons--share">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=<?=$current_url?>" gr-popup><span>Facebook</span></a>
                            <a href="https://twitter.com/intent/tweet?url=<?=$current_url?>&hashtags=groots" gr-popup><span>Twitter</span></a>
                            <a href="https://plus.google.com/share?url=<?=$current_url?>" gr-popup><span>Google+</span></a>
                        </div>
                    </div>
                </div>
            </article>

        <?php else: ?>

            <section class="demo-section" gr-grid="container">
                <header class="demo-header typography">
                    <h2>Hello world</h2>
                </header>
                <div gr-grid="row--block sm-1 sm-offset-1">
                    <div gr-grid="block">
                        <div class="typography">
                            <p>Varius adipiscing phasellus adipiscing habitasse cursus mus nam nec interdum integer nulla mollis ornare quisque montes a diam parturient. Penatibus a faucibus ultrices ut congue suspendisse at imperdiet nec primis felis ac gravida cras iaculis.</p>
                        </div>
                    </div>
                </div>

                <section class="demo-section demo-cards" gr-grid="container" style="display:none">
                    <div gr-grid="row--block sm-3 sm-offset-1" gr-equalizer gr-equalizer-breakpoint="sm" gr-equalizer-target=".demo-card">
                        <div gr-grid="block">
                            <div class="demo-card">
                                <div class="demo-card__figure" gr-lazyloader
                                    gr-lazyloader-sm="https://unsplash.it/768/432/?image=759"
                                    gr-lazyloader-md="https://unsplash.it/1024/576?image=759"
                                    gr-lazyloader-lg="https://unsplash.it/1280/720?image=759">
                                    <img src="https://unsplash.it/480/270/?image=759" alt="">
                                </div>
                                <div class="demo-card__hover">
                                    <p>Venenatis integer conubia</p>
                                    <div class="demo-card__footer">
                                        <a href="layout.php?l=single" class="btn--primary">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div gr-grid="block">
                            <div class="demo-card">
                                <div class="demo-card__figure" gr-lazyloader
                                    gr-lazyloader-sm="https://unsplash.it/768/432/?image=651"
                                    gr-lazyloader-md="https://unsplash.it/1024/576?image=651"
                                    gr-lazyloader-lg="https://unsplash.it/1280/720?image=651">
                                    <img src="https://unsplash.it/480/270/?image=651" alt="">
                                </div>
                                <div class="demo-card__hover">
                                    <p>Venenatis integer conubia</p>
                                    <div class="demo-card__footer">
                                        <a href="layout.php?l=single" class="btn--primary">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div gr-grid="block">
                            <div class="demo-card">
                                <div class="demo-card__figure" gr-lazyloader
                                    gr-lazyloader-sm="https://unsplash.it/768/432/?image=653"
                                    gr-lazyloader-md="https://unsplash.it/1024/576?image=653"
                                    gr-lazyloader-lg="https://unsplash.it/1280/720?image=653">
                                    <img src="https://unsplash.it/480/270/?image=653" alt="">
                                </div>
                                <div class="demo-card__hover">
                                    <p>Venenatis integer conubia</p>
                                    <div class="demo-card__footer">
                                        <a href="layout.php?l=single" class="btn--primary">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div gr-grid="row--block sm-1 sm-offset-1">
                    <div gr-grid="block">
                        <div class="typography">
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                            <p>Varius adipiscing phasellus adipiscing habitasse cursus mus nam nec interdum integer nulla mollis ornare quisque montes a diam parturient. Penatibus a faucibus ultrices ut congue suspendisse at imperdiet nec primis felis ac gravida cras iaculis.</p>
                            <p>Varius adipiscing phasellus adipiscing habitasse cursus mus nam nec interdum integer nulla mollis ornare quisque montes a diam parturient. Penatibus a faucibus ultrices ut congue suspendisse at imperdiet nec primis felis ac gravida cras iaculis.</p>
                            <hr>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <secion class="demo-halfbanner">
                <div class="demo-halfbanner__cover" gr-video-bg gr-video-bg-breakpoint="sm" gr-video-bg-youtube="ScMzIvxBSi4"><img src="/dist/img/demo/bg-home.jpg" alt=""></div>
                <div class="demo-halfbanner__inner">

                    <div class="typography">
                        <div class="h2">Modal Call to Action</div>
                        <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus dictum convallis ut ridiculus dapibus a proin turpis curabitur vestibulum egestas vestibulum neque aptent a pharetra ligula risus ligula dolor eu vel. Neque ullamcorper facilisis netus ac sociis a eros eget dui proin ad sed fermentum fermentum consequat vestibulum a nascetur at duis.</p>
                        <a href="#demo-modal" gr-modal class="btn--ghost">subscribe</a>
                    </div>
                    <div id="demo-modal" hidden>
                        <header class="h3">Subscribe</header>
                        <form class="form" action="" data-parsley-validate novalidate gr-form>
                            <fieldset>
                                <div class="form-item" >
                                    <label for="exampleInputText">Name</label>
                                    <input type="text" id="exampleInputText" placeholder="John Doe" required>
                                </div>
                                <div class="form-item">
                                    <label for="exampleInputEmail">Email address</label>
                                    <input type="email" id="exampleInputEmail" placeholder="john@doe.com" required>
                                </div>
                                <div class="form-item">
                                    <label for="exampleSelect">Occupation</label>
                                    <select id="exampleSelect" required>
                                        <option disabled selected value="hide">Select ...</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                        <option value="4">Option 4</option>
                                    </select>
                                </div>
                                <div class="form-item">
                                    <input type="checkbox" name="rememberme" id="rememberme" required>
                                    <label for="rememberme">Opt-in Legal</label>
                                </div>
                                <button class="btn--primary">Subscribe</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </secion>

            <section class="demo-section demo-cards" gr-grid="container">
                <header class="demo-header typography">
                    <h2>Components</h2>
                </header>
                <div gr-grid="row--block sm-3 sm-offset-1">
                    <div gr-grid="block">
                        <div class="typography">
                            <h3>Complete</h3>
                            <ul>
                                <li>Navigation (JS+CSS)</li>
                                <li>Banners (CSS)</li>
                                <li>Cards (CSS)</li>
                                <li>Equalizer (JS)</li>
                                <li>Forms (JS+CSS)</li>
                                <li>Accordion / Expandable (JS+CSS)</li>
                                <li>SVG Inliner (JS)</li>
                            </ul>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h3>Work In Progress</h3>
                            <ul>
                                <li>Lazy Loading<br><small>incoming: detect in all direction</small></li>
                                <li>Google Maps<br><small>incoming: more options</small></li>
                                <li>Modal<br><small>incoming: fixes</small></li>
                                <li>Video Player<br><small>incoming: groots-isation</small></li>
                                <li>Video Background<br><small>incoming: better instantiation</small></li>
                            </ul>
                        </div>
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h3>To Do</h3>
                            <ul>
                                <li>Alerts</li>
                                <li>Slideshow / Carousel</li>
                                <li>Responsive Tabs</li>
                                <li>Responsive Tables</li>
                                <li>and more...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <secion class="demo-midbanner" gr-grid="container--fluid">
                <div gr-grid="row--block sm-2 collapse">
                    <div
                        gr-grid="block" gr-lazyloader
                        gr-lazyloader-sm="https://unsplash.it/768/432/?image=7"
                        gr-lazyloader-md="https://unsplash.it/1024/576?image=7"
                        gr-lazyloader-lg="https://unsplash.it/1280/720?image=7">
                        <img src="https://unsplash.it/480/270/?image=7" alt="">
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h2 class="h3">About Us</h2>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                            <a href="#" class="btn--ghost">Learn more</a>
                        </div>
                    </div>
                </div>
                <div gr-grid="row--block sm-2 collapse">
                    <div
                        gr-grid="block" gr-lazyloader
                        gr-lazyloader-sm="https://unsplash.it/768/432/?image=6"
                        gr-lazyloader-md="https://unsplash.it/1024/576?image=6"
                        gr-lazyloader-lg="https://unsplash.it/1280/720?image=6">
                        <img src="https://unsplash.it/480/270/?image=6" alt="">
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h2 class="h3">Our Products</h2>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                            <a href="#" class="btn--ghost">Learn more</a>
                        </div>
                    </div>
                </div>
                <div gr-grid="row--block sm-2 collapse">
                    <div
                        gr-grid="block" gr-lazyloader
                        gr-lazyloader-sm="https://unsplash.it/768/432/?image=4"
                        gr-lazyloader-md="https://unsplash.it/1024/576?image=4"
                        gr-lazyloader-lg="https://unsplash.it/1280/720?image=4">
                        <img src="https://unsplash.it/480/270/?image=4" alt="">
                    </div>
                    <div gr-grid="block">
                        <div class="typography">
                            <h2 class="h3">Our Services</h2>
                            <p>Imperdiet pharetra suspendisse ac est sit condimentum parturient metus praesent elit faucibus a pharetra nam fringilla scelerisque. Risus suspendisse senectus.</p>
                            <a href="#" class="btn--ghost">Learn more</a>
                        </div>
                    </div>
                </div>
            </secion>

        <?php endif; ?>

        </main>

        <footer class="demo-footer">
            <div gr-grid="container">
                <div class="demo__copyright">Powered by groots v0.11.0  - All rights reserved © globalia <?=date('Y')?></div>
                <div class="social-icons--link">
                    <a href="https://www.facebook.com/"><span>Facebook</span></a>
                    <a href="https://twitter.com/"><span>Twitter</span></a>
                    <a href="https://plus.google.com/‎"><span>Google+</span></a>
                </div>
            </div>
        </footer>

        <script src="/dist/js/<?php echo (isset($project_name) ? $project_name : 'groots') ?>.js"></script>
    </body>
</html>
