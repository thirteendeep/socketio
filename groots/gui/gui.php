<?php
$basefolder = '../../groots/gui';
$url = explode('?', $_SERVER['REQUEST_URI']);
$path = preg_replace('/^\/groots/', $basefolder, $url[0]);
$path = $path == $basefolder || $path == $basefolder.'/' ? $basefolder.'/index.php' : $path;
$finfo = finfo_open(FILEINFO_MIME_TYPE);
if (file_exists($path)) {
    $mime = finfo_file($finfo, $path);
    switch ($mime) {
        case 'text/plain':
        case 'text/x-php':
            include($path);
            break;
        default:
            header('Content-Type:'.$mime);
            header('Content-Length: ' . filesize($path));
            readfile($path);
            break;
    }
} else {
    header("HTTP/1.0 404 Not Found");
}
?>
