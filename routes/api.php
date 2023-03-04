<?php

use App\Http\Controllers\API\ResumeController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/resumes', [ResumeController::class, 'index'])->middleware('auth:sanctum');
Route::get('/resume/{resume}', [ResumeController::class, 'show'])->middleware('auth:sanctum');
Route::post('/resume', [ResumeController::class, 'create'])->middleware('auth:sanctum');
Route::delete('/resume/{resume}', [ResumeController::class, 'destroy'])->middleware('auth:sanctum');
