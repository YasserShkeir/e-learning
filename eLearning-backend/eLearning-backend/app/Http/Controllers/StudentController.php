<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Assignment;

class StudentController extends Controller
{
    public function viewAssignment($id = null)
    {
        $data = 'No Data';
        $status = 'No Assignments Found';

        if (!$id) {
            $data =  Assignment::all();
            $status = "Returning All";
        } else {
            $data = Assignment::find($id);
            $status = "Returning ID " . $id;
        }

        return response()->json([
            "Status" => $status,
            "Data" => $data
        ]);
    }
}
