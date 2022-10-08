<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Course;
use App\Models\User;

class AdminController extends Controller
{
    // Get User based on ID
    public function getUsers($id = null)
    {
        $data = 'No Data';
        $status = 'No Users Found';

        if (!$id) {
            $data =  User::all();
            $status = "Returning All";
        } else {
            $data = User::find($id);
            $status = "Returning ID " . $id;
        }

        return response()->json([
            "Status" => $status,
            "Data" => $data
        ]);
    }

    // Add User - Except Admin
    public function addUser(Request $request)
    {
        $user = new User;

        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = $request['password'];

        // Add Instructor
        if ($request['userType'] == 2) {
            $user->courses = $request['courses'];
            $user->userType = $request['userType'];

            $user->save();
            return response()->json([
                'Message' => 'Added Instructor',
                'Instructor' => $user
            ]);
        }

        // Add Student
        if ($request['userType'] == 3) {
            $user->enrolledCourses = $request['enrolledCourses'];
            $user->assignments = $request['assignments'];
            $user->userType = $request['userType'];

            $user->save();
            return response()->json([
                'Message' => 'Added Student',
                'Student' => $user
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

    public function getCourses($id = null)
    {
        $data = 'No Data';
        $status = 'No Courses Found';

        if (!$id) {
            $data =  Course::all();
            $status = "Returning All";
        } else {
            $data = Course::find($id);
            $status = "Returning ID " . $id;
        }

        return response()->json([
            "Status" => $status,
            "Data" => $data
        ]);
    }
}
