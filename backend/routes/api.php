<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\FacturaController;
use App\Http\Controllers\CounterUtutoController;
use Illuminate\Support\Facades\Route;

// Aplica el middleware CORS a todas las rutas
Route::middleware('cors')->resource('clientes', ClienteController::class);
Route::middleware('cors')->resource('facturas', FacturaController::class);
Route::middleware('cors')->get('/counter', [CounterUtutoController::class, 'show']);
Route::middleware('cors')->post('/counter/increment', [CounterUtutoController::class, 'increment']);
