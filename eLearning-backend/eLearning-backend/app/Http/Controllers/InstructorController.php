<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Assignment;

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

    public function createAssignment(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'courseCode' => 'required',
            'dueDate' => 'required',
            'tasks' => 'required'
        ]);

        $assignment = new Assignment;

        $assignment->title = $request['title'];
        // $assignment->instructor_id = $request['instructor_id'];
        // $assignment->instructorName = $request['instructorName'];
        $assignment->courseCode = $request['courseCode'];
        $assignment->dueDate = $request['dueDate'];
        $assignment->tasks = $request['tasks'];

        $assignment->save();
        return response()->json([
            'Message' => 'Added Assignment',
            'Assignment' => $assignment
        ]);
    }
}
