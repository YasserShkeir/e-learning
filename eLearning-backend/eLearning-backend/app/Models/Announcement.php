<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Announcement extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'announcements';
}
