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

        if ($currUser['userType'] == 2) {
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

        return response()->json([
            'Message' => 'Error'
        ]);
    }

    public function updateStudentCourses(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'course' => 'required',
            'type' => 'required'
        ]);

        $id = $request['id'];
        $type = $request['type'];
        $message = "Unaffected";
        $student = User::findOrFail($id);
        $studentArray = json_decode($student->get());
        $studentCourses = $studentArray[0]->courses;

        if ($request['type'] == 'add') {
            $message = "Added";
            array_push($studentCourses, $request['course']);
            $student->update(['courses' => $studentCourses]);
        }
        if ($request['type'] == 'del') {
            $message = "Deleted";
            if (($key = array_search($request['course'], $studentCourses)) !== false) {
                unset($studentCourses[$key]);
            }
            $studentCourses = array_values($studentCourses);
            $student->update(['courses' => $studentCourses]);
        }

        return response()->json([
            'Message' => 'Student ' . $message,
            'Type' => $type,
            'Student' => $student
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
    }

    public function createAnnouncement(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'courseCode' => 'required',
            'text' => 'required'
        ]);

        $announcement = new Announcement;

        $announcement->title = $request['title'];
        // $assignment->instructor_id = $request['instructor_id'];
        // $assignment->instructorName = $request['instructorName'];
        // $assignment->course_id = $request['course_id'];
        $announcement->courseCode = $request['courseCode'];
        $announcement->text = $request['text'];

        $announcement->save();
        return response()->json([
            'Message' => 'Added Announcement',
            'Announcement' => $announcement
        ]);
    }
}
