<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('userType')->default('admin');
            $table->timestamps();
        });
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });
        // Schema::create('instructors', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        //     $table->string('password');
        //     $table->string('userType')->default('instructor');
        //     $table->json('courses');
        //     $table->timestamps();
        // });
        // Schema::create('students', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        //     $table->string('password');
        //     $table->string('userType')->default('student');
        //     $table->json('enrolledCourses');
        //     $table->json('assignments');
        //     $table->timestamps();
        // });
        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('instructorName');
            $table->string('courseName');
            $table->date('dueDate');
            $table->json('tasks');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('instructors');
    }
};
