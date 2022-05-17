<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teszt;

class TesztContoller extends Controller
{
    public function index()
    {
        $teszt = Teszt::all();
        return response()->json($teszt);
    }
}
