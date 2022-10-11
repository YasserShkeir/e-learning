<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login'); // Done
    Route::post('register', 'register'); // Done
    Route::post('logout', 'logout'); // Done
    Route::post('refresh', 'refresh'); // Done
    Route::get('getSelf', 'getSelf'); // Done
});



Route::group(["middleware" => "auth:api"], function () {
    // Admin APIs All Done
    Route::controller(AdminController::class)->group(function () {
        Route::post('getsorted', 'getSortedUsers'); // Done
        Route::post('addUser', 'addUser'); // Done
        Route::get('/getUsers/{id?}', 'getUsers'); // Done
        Route::get('/getCourses/{id?}', 'getCourses'); // Done
        Route::post('addCourse', 'addCourse'); // Done
    });

    Route::controller(InstructorController::class)->group(function () {
        Route::post('addStudent', 'addStudent'); // Done
        Route::post('updateStudentCourses', 'updateStudentCourses'); // Done
        Route::post('createAssignment', 'createAssignment');
        Route::post('createAnnouncement', 'createAnnouncement');
    });

    Route::controller(StudentController::class)->group(function () {
        Route::get('/viewAssignment/{id?}', 'viewAssignment');
    });
});
