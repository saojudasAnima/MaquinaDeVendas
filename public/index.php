<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Obtém a rota atual e normaliza
$requestUri = str_replace('/usjt-candy-machine/public', '', $_SERVER['REQUEST_URI']) ?: '/';
$requestUri = mb_strtolower($requestUri);

// Verifica se é uma requisição GET ou POST
$method = $_SERVER['REQUEST_METHOD'];

// Carrega as rotas
$cfgRoutes = new \App\Config\Routes();
$routes = $cfgRoutes->getRoutes();

// Verifica se a rota e o método existem
if (isset($routes[$method][$requestUri])) {
    //-- Carrega o config
    $config = new \App\Config\Config();
    $config->run($routes[$method][$requestUri]);
    exit();
}

// Retorna erro 404 se a rota não for encontrada
http_response_code(404);
echo "Página não encontrada.";
exit();
