<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;

class AdminController extends Controller
{
    public function getAdmins()
    {
        return response()->json([
            'admin' => Admin::all()
        ]);
    }


    public function addUser(Request $request)
    {
        if ($request['userType'] == 2) {
            $instructor = new User;

            $instructor->name = $request['name'];
            $instructor->email = $request['email'];
            $instructor->password = $request['password'];
            $instructor->courses = $request['courses'];
            $instructor->userType = $request['userType'];

            $instructor->save();
            return response()->json([
                'Message' => 'Added Instructor',
                'Instructor' => $instructor
            ]);
        }
        if ($request['userType'] == 3) {
            $student = new User;

            $student->name = $request['name'];
            $student->email = $request['email'];
            $student->password = $request['password'];
            $student->enrolledCourses = $request['enrolledCourses'];
            $student->assignments = $request['assignments'];
            $student->userType = $request['userType'];

            $student->save();
            return response()->json([
                'Message' => 'Added Student',
                'Student' => $student
            ]);
        }
        return response()->json([
            'Message' => 'No User Added'
        ]);
    }

    // Returns users sorted by name based on Initials, request includes user type
    public function getSortedUsers(Request $request)
    {
        $message = 'Cannot Sort';
        $res = 'Error in user Type chosen';

        if ($request['userType'] == '2') {
            $message = 'Sorted Instructors';
            $res = User::raw(
                function ($collection) {
                    return $collection->aggregate([['$match' => ['userType' => '2']], ['$sort' => ['name' => 1]]]);
                }
            );
        }
        if ($request['userType'] == '3') {
            $message = 'Sorted Students';
            $res = User::raw(
                function ($collection) {
                    return $collection->aggregate([['$match' => ['userType' => '3']], ['$sort' => ['name' => 1]]]);
                }
            );
        }

        return response()->json([
            'Message' => $message,
            'Results' => $res
        ]);
    }
}
