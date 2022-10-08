<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    public function show($name)
    {
        // return view('admin', [
        //     'admin' => Admin::all()
        // ]);

        return response()->json([
            'admin' => Admin::where('password', '=', $name)->get()
        ]);
    }
}
