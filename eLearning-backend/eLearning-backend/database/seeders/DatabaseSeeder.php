<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        //
        $admin1 = new User;

        $admin1->name = 'Admin 1';
        $admin1->email = 'admin1@email.com';
        $admin1->password = Hash::make('test');
        $admin1->userType = '1';

        $admin1->save();

        //
        $admin2 = new User;

        $admin2->name = 'Admin 2';
        $admin2->email = 'admin2@email.com';
        $admin2->password = Hash::make('test');
        $admin2->userType = '1';

        $admin2->save();

        //
        $student1 = new User;

        $student1->name = 'Student 1';
        $student1->email = 'student1@email.com';
        $student1->password = Hash::make('test');
        $student1->enrolledCourses = ['Calculus 1', 'Calculus 2'];
        $student1->assignments = ['Assignment ID 1', 'Assignment ID 2'];
        $student1->userType = '3';

        $student1->save();

        //
        $student2 = new User;

        $student2->name = 'Student 2';
        $student2->email = 'student2@email.com';
        $student2->password = Hash::make('test');
        $student2->enrolledCourses = ['Algebra', 'Geometry'];
        $student2->assignments = ['Assignment ID 3', 'Assignment ID 4'];
        $student2->userType = '3';

        $student2->save();

        //
        $instructor1 = new User;

        $instructor1->name = 'Instructor 1';
        $instructor1->email = 'instructor1@email.com';
        $instructor1->password = Hash::make('test');
        $instructor1->courses = ['Calculus 1', 'Calculus 2'];
        $instructor1->userType = '2';

        $instructor1->save();

        //
        $instructor2 = new User;

        $instructor2->name = 'Instructor 2';
        $instructor2->email = 'instructor2@email.com';
        $instructor2->password = Hash::make('test');
        $instructor2->courses = ['Algebra', 'Geometry'];
        $instructor2->userType = '2';

        $instructor2->save();

        //
        $course1 = new Course;

        $course1->code = 'CSCI111';
        $course1->name = 'Foundations of Computer Science';
        $course1->credits = 3;

        $course1->save();

        //
        $course2 = new Course;

        $course2->code = 'CSCI222';
        $course2->name = 'Advance Computer Science Topics';
        $course2->credits = 3;

        $course2->save();

        //
        $assignment1 = new Assignment;

        $assignment1->title = 'Finish FCS Page 10';
        $assignment1->instructor_id = 'Inst. ID on submit';
        $assignment1->instructorName = 'Instructor 1';
        $assignment1->course_id = 'Course ID on submit';
        $assignment1->courseCode = 'CSCI111';
        $assignment1->dueDate = '2022-10-10';
        $assignment1->tasks = ['Finish Reading FCS Page 10', 'Finish Exercises FCS Page 10'];
        $assignment1->submittedBy = ['Student 1 ID'];

        $assignment1->save();

        //
        $assignment2 = new Assignment;

        $assignment2->title = 'Finish ICS Page 20';
        $assignment2->instructor_id = 'Inst. ID on submit';
        $assignment2->instructorName = 'Instructor 2';
        $assignment2->course_id = 'Course ID on submit';
        $assignment2->courseCode = 'CSCI222';
        $assignment2->dueDate = '2022-10-22';
        $assignment2->tasks = ['Finish Reading ICS Page 20', 'Finish Exercises ICS Page 20'];
        $assignment2->submittedBy = ['Student 2 ID'];

        $assignment2->save();

        //
        $announcement1 = new Announcement;

        $announcement1->title = 'Announcement 1';
        $announcement1->instructor_id = 'Inst. ID on submit';
        $announcement1->instructorName = 'Instructor 1';
        $announcement1->course_id = 'Course ID on submit';
        $announcement1->courseCode = 'CSCI111';
        $announcement1->text = '2022-10-11';

        $announcement1->save();

        //
        $announcement2 = new Announcement;

        $announcement2->title = 'Announcement 2';
        $announcement2->instructor_id = 'Inst. ID on submit';
        $announcement2->instructorName = 'Instructor 2';
        $announcement2->course_id = 'Course ID on submit';
        $announcement2->courseCode = 'CSCI222';
        $announcement2->text = '2022-10-22';

        $announcement2->save();
    }
}
