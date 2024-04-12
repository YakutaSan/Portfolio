<?php

namespace App\Kernel; 

use App\Kernel\Container\Container;

class App
{
    private Container $container; // переменная контейнер с классом КОНТЕЙНЕР

    public function __construct() // функция конскруктор (срабатывает при создании класса АПП)
    {
        $this->container = new Container(); // создание объекта класса КОНТЕЙНЕР сразу при создании объекта класса АПП
    }
    public function run(): void 
    {
        $this->container->router->dispatch( 
            $this->container->request->uri(),
            $this->container->request->method()
        );
    }
}