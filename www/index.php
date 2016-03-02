<?php

$scripts =
     '<script type="text/javascript" src="js/BuildQuery.js"></script>'
    .'<script type="text/javascript" src="js/GetRequest.js"></script>'
    .'<script type="text/javascript" src="js/PostRequest.js"></script>'
    .'<script type="text/javascript" src="js/ParseGet.js"></script>'
    .'<script type="text/javascript" src="js/Main.js"></script>';

$links =
    '<link rel="stylesheet" type="text/css" href="index.css">';


echo '<!DOCTYPE html>'
    .'<html>'
        .'<head>'
            .'<title>რეცეპტები</title>'
            .'<meta charset="UTF-8">'
            .'<meta name="viewport" content="width=device-width, user-scalable=no" />'
            .$links
        .'</head>'
        .'<body">'
            .'<div id="drag1"  class="drag" draggable="true" ondragstart="drag(event)" >'
            .'</div>'
            .'<div id="div1" class="desk" ondrop="drop(event)" ondragover="allowDrop(event)">'
            .'</div>'
            .$scripts
        .'</body>'
    .'</html>';

