<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;



Route::get('/getCourseFeatures',[HomeController::class,'getCourseFeatures']);
Route::get('/getCoursePlan',[HomeController::class,'getCoursePlan']);
Route::get('/getPaymentGuide',[HomeController::class,'getPaymentGuide']);
Route::get('/getMoreSeries',[HomeController::class,'getMoreSeries']);
Route::get('/getFreeClass',[HomeController::class,'getFreeClass']);




// This Twi Default Route Should Be write At Last
Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath','.*');