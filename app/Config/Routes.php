<?php

namespace App\Config;

class Routes
{
    private $routes = [];

    public function __construct()
    {
        // Definindo as rotas com seus respectivos controladores e métodos
        $this->routes = [
            'GET' => [
                '/' => \App\Controllers\Home::class,
                '/home' => \App\Controllers\Home::class,
                '/login' => \App\Controllers\Api\Login::class,
            ],
            'POST' => [
                '/login' => \App\Controllers\Api\Login::class,
            ],
        ];
    }

    /**
     * Retorna todas as rotas registradas.
     *
     * @return array
     */
    public function getRoutes(): array
    {
        return $this->routes;
    }

    /**
     * Adiciona uma nova rota dinamicamente.
     *
     * @param string $method Método HTTP (GET, POST, etc.)
     * @param string $path Caminho da rota
     * @param string $action Controlador e método no formato Controller@method
     */
    public function addRoute(string $method, string $path, string $action): void
    {
        $method = strtoupper($method);
        $this->routes[$method][$path] = $action;
    }
}
