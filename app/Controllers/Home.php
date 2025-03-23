<?php

namespace App\Controllers;

class Home extends Core\BaseController
{
    public function index()
    {
        return $this->view('pages/index.html');
    }
}
