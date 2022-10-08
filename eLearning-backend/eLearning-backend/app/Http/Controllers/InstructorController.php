<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class InstructorController extends Controller
{
    public function addStudent(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'enrolledCourses' => 'required',
            'assignments' => 'required'
        ]);

        $user = new User;

        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = $request['password'];
        $user->enrolledCourses = $request['enrolledCourses'];
        $user->assignments = $request['assignments'];
        $user->userType = "3";

        $user->save();
        return response()->json([
            'Message' => 'Added Student',
            'Student' => $user
        ]);
    }
}
