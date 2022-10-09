<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::post('/getsorted', [AdminController::class, 'getSortedUsers']);
Route::post('/addUser', [AdminController::class, 'addUser']);
Route::get('/getUsers/{id?}', [AdminController::class, 'getUsers']);
Route::get('/getCourses/{id?}', [AdminController::class, 'getCourses']);
Route::get('/getCourses', [AdminController::class, 'getCourses']);
Route::post('/addCourse', [AdminController::class, 'addCourse']);

Route::post('/addStudent', [InstructorController::class, 'addStudent']);
Route::post('/updateStudentCourses', [InstructorController::class, 'updateStudentCourses']);
Route::post('/createAssignment', [InstructorController::class, 'createAssignment']);
Route::post('/createAnnouncement', [InstructorController::class, 'createAnnouncement']);

Route::get('/viewAssignment/{id?}', [StudentController::class, 'viewAssignment']);
