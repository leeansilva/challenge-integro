<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\FacturaController;
use App\Http\Controllers\CounterUtutoController;
use Illuminate\Support\Facades\Route;

// Aplica el middleware CORS a todas las rutas
Route::resource('clientes', ClienteController::class);
Route::resource('facturas', FacturaController::class);
Route::get('/counter', [CounterUtutoController::class, 'show']);
Route::post('/counter/increment', [CounterUtutoController::class, 'increment']);
