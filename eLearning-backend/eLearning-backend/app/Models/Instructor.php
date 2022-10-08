<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Instructor extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'instructors';
}
