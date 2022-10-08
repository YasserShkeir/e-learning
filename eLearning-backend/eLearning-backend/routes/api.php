<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

Route::get('/admin/{name?}', [AdminController::class, 'getAdmins']);
// Route::get('/instructor/{name}', [InstructorController::class, 'show']);
Route::post('/getsorted', [AdminController::class, 'getSortedUsers']);
Route::post('/addUser', [AdminController::class, 'addUser']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
