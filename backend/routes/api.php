<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\FacturaController;
use Illuminate\Support\Facades\Route;

Route::resource('clientes', ClienteController::class);

Route::resource('facturas', FacturaController::class);


