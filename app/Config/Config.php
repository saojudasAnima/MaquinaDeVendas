<?php

namespace App\Config;

class Config
{

    public function __construct()
    {
        //-- Define o fuso horário padrão
        date_default_timezone_set('America/Sao_Paulo');

        //-- Define o idioma padrão
        setlocale(LC_ALL, 'pt_BR', 'pt_BR.utf-8', 'portuguese');

        //-- Define o idioma padrão para as funções de data
        setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'portuguese');

        //-- Carrega arquivos da pasta helpers
        foreach (glob(__DIR__ . '/../Helpers/*.php') as $filename) {
            require_once $filename;
        }
    }

    public function run($controller)
    {
        // Define se é uma API
        $isApi = strpos($controller, 'Api\\') !== false;

        // Determina o namespace base do Controller
        $namespace = 'App\Controllers' . ($isApi ? '\Api' : '');

        // Se necessário, ajusta o nome do Controller
        $controller = str_replace([$namespace . '\\', 'Api\\'], '', $controller);
        list($controllerName, $methodName) = explode('\\', $controller) + [1 => 'index'];

        // Monta o nome completo do Controller
        $controllerClass = "$namespace\\$controllerName";

        // Instancia e chama o método
        if (class_exists($controllerClass) && method_exists($controllerClass, $methodName)) {
            (new $controllerClass())->$methodName();
        }
    }
}
