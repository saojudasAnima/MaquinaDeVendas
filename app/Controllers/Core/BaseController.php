<?php

namespace App\Controllers\Core;

class BaseController
{
    /**
     * Método responsável por retornar a view
     * 
     * @param string $path
     * @return string
     */
    public function view($path)
    {
        $file = __DIR__ . '/../../Views/' . $path;

        if (file_exists($file)) {
            require_once $file;
            //-- Retorna o conteúdo do arquivo
            return file_get_contents($file);
        } else {
            http_response_code(404);
            echo "Página não encontrada.";
            exit();
        }
    }
}
