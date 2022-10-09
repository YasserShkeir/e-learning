<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Assignment;
use App\Models\Announcement;
use Illuminate\Support\Facades\Auth;

class InstructorController extends Controller
{
    public function addStudent(Request $request)
    {
        $currUser = Auth::user();

        $message = 'Error';
        $user = new User;

        if ($currUser['userType'] == 2) {
            $request->validate([
                'name' => 'required',
                'email' => 'required',
                'password' => 'required',
                'enrolledCourses' => 'required',
                'assignments' => 'required'
            ]);

            $user->name = $request['name'];
            $user->email = $request['email'];
            $user->password = $request['password'];
            $user->enrolledCourses = $request['enrolledCourses'];
            $user->assignments = $request['assignments'];
            $user->userType = "3";

            $user->save();

            $message = 'Added Student';
        }

        return response()->json([
            'Message' => $message,
            'Student' => $user
        ]);
    }

    public function updateStudentCourses(Request $request)
    {
        $currUser = Auth::user();

        if ($currUser['userType'] == 2) {
            $request->validate([
                'id' => 'required',
                'course' => 'required',
                'type' => 'required'
            ]);

            $id = $request['id'];
            $type = $request['type'];
            $message = "Unaffected";
            $student = User::find($id);
            if ($student['userType'] == 3) {
                $studentArray = json_decode($student);
                $studentCourses = $studentArray->enrolledCourses;

                if ($request['type'] == 'add') {
                    $message = "Added";
                    array_push($studentCourses, $request['course']);
                    $student->update(['enrolledCourses' => $studentCourses]);
                }
                if ($request['type'] == 'del') {
                    $message = "Not Found";
                    if (($key = array_search($request['course'], $studentCourses)) !== false) {
                        unset($studentCourses[$key]);
                        $message = "Deleted";
                    }
                    $studentCourses = array_values($studentCourses);
                    $student->update(['enrolledCourses' => $studentCourses]);
                }

                return response()->json([
                    'Message' => 'Course ' . $message,
                    'Student' => $student
                ]);
            } else {
                return response()->json([
                    'Message' => 'Can edit only Students'
                ]);
            }
        } else {
            return response()->json([
                'Message' => 'Not an instructor'
            ]);
        }

        return response()->json([
            'Message' => 'Error'
        ]);
    }

    public function createAssignment(Request $request)
    {
        $currUser = Auth::user();

        if ($currUser['userType'] == 2) {
            $request->validate([
                'title' => 'required',
                'courseCode' => 'required',
                'dueDate' => 'required',
                'tasks' => 'required'
            ]);

            $assignment = new Assignment;

            $assignment->title = $request['title'];
            $assignment->instructor_id = $currUser['_id'];
            $assignment->instructorName = $currUser['name'];
            // $assignment->course_id = $request['course_id'];
            $assignment->courseCode = $request['courseCode'];
            $assignment->dueDate = $request['dueDate'];
            $assignment->tasks = $request['tasks'];
            $assignment->submittedBy = [];

            $assignment->save();
            return response()->json([
                'Message' => 'Added Assignment',
                'Assignment' => $assignment
            ]);
        } else {
            return response()->json([
                'Message' => 'Not an Instructor'
            ]);
        }

        return response()->json([
            'Message' => 'Error'
        ]);
    }

    public function createAnnouncement(Request $request)
    {
        $currUser = Auth::user();

        if ($currUser['userType'] == 2) {
            $request->validate([
                'title' => 'required',
                'courseCode' => 'required',
                'text' => 'required'
            ]);

            $announcement = new Announcement;

            $announcement->title = $request['title'];
            $announcement->instructor_id = $currUser['_id'];
            $announcement->instructorName = $currUser['name'];
            // $announcement->course_id = $request['course_id'];
            $announcement->courseCode = $request['courseCode'];
            $announcement->text = $request['text'];

            $announcement->save();
            return response()->json([
                'Message' => 'Added Announcement',
                'Announcement' => $announcement
            ]);
        }

        return response()->json([
            'Message' => 'Error'
        ]);
    }
}
