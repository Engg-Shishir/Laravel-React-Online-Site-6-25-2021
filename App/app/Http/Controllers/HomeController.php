<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\CourseFeature;
use App\Models\CoursePlan;
use App\Models\PaymentGuide;
use App\Models\MoreSeries;
use App\Models\FreeClass;



class HomeController extends Controller
{

    function getCourseFeatures(Request $request){
       $result= CourseFeature::all();
       return  $result;
    }

    function getCoursePlan(Request $request){
        $result= CoursePlan::all();
        return  $result;
    }

    function getPaymentGuide(Request $request){
        $result= PaymentGuide::all();
        return  $result;
    }

    function getMoreSeries(Request $request){
        $result= MoreSeries::all();
        return  $result;
    }

    function getFreeClass(Request $request){
        $result= FreeClass::all();
        return  $result;
    }
}
