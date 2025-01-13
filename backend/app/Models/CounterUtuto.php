<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CounterUtuto extends Model
{
    protected $table = 'counter_ututo'; 
    protected $fillable = ['count']; 
    public $timestamps = true;
}

