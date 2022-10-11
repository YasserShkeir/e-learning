<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    // Get User based on ID
    public function getUsers($id = null)
    {
        $currUser = Auth::user();

        $data = 'No Data';
        $status = 'No Users Found';

        if ($currUser['userType'] != 1) {
            $data = 'Please login as an admin';
            $status = 'Error';
        } else {
            if (!$id) {
                $data =  User::all();
                $status = "Returning All";
            } else {
                $data = User::find($id);
                $status = "Returning ID " . $id;
            }
        }

        return response()->json([
            "Status" => $status,
            "Data" => $data
        ]);
    }

    // Add User - Except Admin
    public function addUser(Request $request)
    {
        $currUser = Auth::user();

        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = new User;

        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = $request['password'];

        $message = 'Error';

        if ($currUser['userType'] == 1) {
            // Add Admin
            if ($request['userType'] == 1) {
                $user->userType = $request['userType'];
                $user->save();
                $message = 'Added Admin';
            }

            // Add Instructor
            if ($request['userType'] == 2) {
                $user->courses = $request['courses'];
                $user->userType = $request['userType'];

                $user->save();
                $message = 'Added Instructor';
            }

            // Add Student
            if ($request['userType'] == 3) {
                $user->enrolledCourses = $request['enrolledCourses'];
                $user->assignments = $request['assignments'];
                $user->userType = $request['userType'];

                $user->save();
                $message = 'Added Student';
            }
        }

        return response()->json([
            'Message' => $message,
            'User' => $user
        ]);
    }

    // Returns users sorted by name based on Initials, request includes user type
    public function getSortedUsers(Request $request)
    {
        $currUser = Auth::user();

        $request->validate([
            'userType' => 'required',
        ]);

        $message = 'Cannot Sort';
        $res = 'Error in user Type chosen';

        if ($currUser['userType'] == 1) {
            if ($request['userType'] == '1') {
                $message = 'Sorted Admins';
                $res = User::raw(
                    function ($collection) {
                        return $collection->aggregate([['$match' => ['userType' => '1']], ['$sort' => ['name' => 1]]]);
                    }
                );
            }
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
        } else {
            $res = 'Not an admin';
        }

        return response()->json([
            'Message' => $message,
            'Data' => $res
        ]);
    }

    // Get a single course if an ID is given, all courses otherwise
    public function getCourses($id = null)
    {
        $currUser = Auth::user();

        $data = 'No Data';
        $status = 'No Courses Found';

        if ($currUser['userType'] == 1) {
            if (!$id) {
                $data =  Course::all();
                $status = "Returning All";
            } else {
                $data = Course::find($id);
                $status = "Returning ID " . $id;
            }
        } else {
            $status = 'Not an admin';
        }

        return response()->json([
            "Status" => $status,
            "Data" => $data
        ]);
    }

    // Add a course
    public function addCourse(Request $request)
    {
        $request->validate([
            'code' => 'required',
            'name' => 'required',
            'credits' => 'required',
        ]);

        $currUser = Auth::user();
        $course = new Course;

        if ($currUser['userType'] == 1) {

            $course->code = $request['code'];
            $course->name = $request['name'];
            $course->credits = $request['credits'];

            $course->save();
        } else {
            $message = 'Not an Admin';
        }

        return response()->json([
            'Message' => $message,
            'Course' => $course
        ]);
    }
}
