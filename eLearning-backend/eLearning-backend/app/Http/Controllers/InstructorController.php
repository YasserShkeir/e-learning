<?php

namespace App\Http\Controllers;

use App\Models\Instructor;
use Illuminate\Http\Request;

class InstructorController extends Controller
{
    public function show($name)
    {
        return response()->json([
            'instructor' => Instructor::where('password', '=', $name)->get()
        ]);
    }
}
