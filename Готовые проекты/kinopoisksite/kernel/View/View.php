<?php

namespace App\Kernel\View;

use App\Kernel\Auth\AuthInterface;
use App\Kernel\Exceptions\ViewNotFoundException;
use App\Kernel\Session\Session;
use App\Kernel\Session\SessionInterface;

class View implements ViewInterface // реализация визуальной части на странице
{
    public function __construct(
        private SessionInterface $session,
        private AuthInterface $auth,
    )
    {
    } 

    public function page(string $name): void // 
    {

        $viewPath = APP_PATH . "/views/pages/$name.php"; // путь до файла разметки

        if (!file_exists($viewPath)) { // проверка на существование файла
            throw new ViewNotFoundException("View $name not found"); // выбрасывает исключение если файл не существует
        }

        extract($this->defaultData());

        include_once $viewPath; // подключение файла по пути
    }

    public function component(string $name): void
    {
        $componentPath = APP_PATH . "/views/components/$name.php";

        if (!file_exists($componentPath)) {
            echo "Component $name not found";
            return;
        }

        extract($this->defaultData());

        include_once APP_PATH . "/views/components/$name.php";
    }

    private function defaultData(): array
    {
        return [
            'view' => $this,
            'session' => $this->session,
            'auth' => $this->auth,
        ];
    }
}