<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('getSelf', 'getSelf');
});

Route::group(["middleware" => "auth:api"], function () {
    Route::controller(AdminController::class)->group(function () {
        Route::post('getsorted', 'getsorted');
        Route::post('addUser', 'addUser');
        Route::get('/getUsers/{id?}', 'getUsers');
        Route::get('/getCourses/{id?}', 'getCourses');
        Route::post('addCourse', 'addCourse');
    });

    Route::controller(InstructorController::class)->group(function () {
        Route::post('addStudent', 'addStudent');
        Route::post('updateStudentCourses', 'updateStudentCourses');
        Route::post('createAssignment', 'createAssignment');
        Route::post('createAnnouncement', 'createAnnouncement');
    });

    Route::controller(StudentController::class)->group(function () {
        Route::get('/viewAssignment/{id?}', 'viewAssignment');
    });
});
