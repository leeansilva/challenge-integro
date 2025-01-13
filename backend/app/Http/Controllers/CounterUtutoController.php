<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CounterUtuto;

class CounterUtutoController extends Controller
{
    public function show()
    {
        $counter = CounterUtuto::first(); 
        if (!$counter) {
            return response()->json(['count' => 0], 200);
        }
        return response()->json(['count' => $counter->count], 200);
    }

    public function increment()
    {
        $counter = CounterUtuto::first();

        if (!$counter) {
            $counter = CounterUtuto::create(['count' => 1]);
        } else {
            $counter->increment('count');
        }

        return response()->json(['count' => $counter->count], 200);
    }
}
