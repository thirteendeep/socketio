# Groots
> A frontend framework development starter-kit for Globalia projects

## Getting started
This starter-kit requires that you already have installed [Node.js](http://nodejs.org/) and [Gulp](http://gulpjs.com/) globally on your local environment.

#### Step 1. Get groots

**The following applies ONLY if you want to install groots WITHOUT Globalia's command `createdev`.**
**Otherwise, groots will already be in your project's repository.**

-  First, you need to download [groots'package](https://git.globalia.ca/globalia/groots-starterkit/repository/archive.zip?ref=master).
-  Then, uncompress the package at the root of your project.

#### Step 2. Install groots

-  Edit the `config.js` file in _./groots_, according to your project'S configuration.
-  In Terminal, navigate to your project root directory and execute:

```shell
node groots/build/install
```

This command will execute several tasks to setup the whole package into your current directory:

-  Copy `package.json` and `gulpfile.js` at the root of the project
-  Then run `npm install` to retrieve all the dependancies needed by groots
-  Then run `gulp initial` to setup groots
-  Finally, run `gulp gui` to build the groots'interface.

If you are on a development or production server, you should execute `node groots/install` with the security privileges of the user you're currently configuring:

```shell
sudo -u user node groots/build/install
```

If you are on a production server, add the `--prod` flag to any commands you want to execute.
It will minify the output of css files and js files.

```shell
node groots/build/install --prod
gulp initial --prod
```

#### Step 3. Enjoy groots

Yep, groots is ready. Your turn to write some code!


- - -

## Build system

Our build system relies mostly on Gulp and Post-CSS to perform various tasks

#### groots' tasks

Command&nbsp;line       | Description
----------------------- | -------------------------------------------
`gulp fonts`            | Copy hosted font files
`gulp styles`           | Lint & Compile SCSS files
`gulp scripts`          | Lint & Compile JS files
`gulp images`           | Optimise & Copy media files (preserving SVG for animation)
`gulp favicons`         | Create multiple favicons from a single file
`gulp gui`              | Generate GUI
`gulp watch`            | Watch for modifications in your project files (CSS, JS, images, fonts and gui files) and run adequate single task
`gulp live`             | Watch files and enable livereload (you need to have [livereload browser extension](http://livereload.com/extensions/))

#### groots' bundled tasks

Command&nbsp;line       | Description
----------------------- | -------------------------------------------
`gulp`                  | Default task, used for development. Execute `fonts`, `styles`, `scripts` and `images` tasks
`gulp build`            | Build task, used for deployment. Execute `fonts`, `styles`, `scripts`, `images`, `favicons` and `gui` tasks
`gulp initial`          | Alias of `build` task


#### groots' flags

Command&nbsp;line       | Description
----------------------- | -------------------------------------------
`--stage`               | Disabled developpers'notifications
`--prod`                | Minify CSS and JS

- - -

## Server dependencies

You will need the 2 following packages installed on your server:

- libjpeg62-dev (https://packages.debian.org/sid/libjpeg62-dev)

```shell
sudo apt-get install libjpeg62-dev
```

- libpng-dev (http://www.libpng.org/pub/png/libpng.html)

```shell
sudo apt-get install libpng-dev
```
