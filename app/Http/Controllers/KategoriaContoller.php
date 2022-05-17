<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategoria;

class KategoriaContoller extends Controller
{
    public function index()
    {
        $kategoria = Kategoria::all();
        return response()->json($kategoria);
    }
}
