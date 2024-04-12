<?php
define('APP_PATH', dirname(__DIR__)); // константа пути /opt/lampp/htdocs

require_once APP_PATH . '/vendor/autoload.php'; // подключение автолоудера классов

use App\Kernel\App; // подключение класса АПП

$app = new App(); // создание объекта класса АПП

$app->run(); // запуск метода РАН класса АПП
