<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Assignment extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'assignments';
}
