<?php

use App\Http\Controllers\ClienteController;
use Illuminate\Support\Facades\Route;

// Obtener todos los clientes
Route::get('clientes', [ClienteController::class, 'index']);

// Crear un nuevo cliente
Route::post('clientes', [ClienteController::class, 'store']);

// Mostrar un cliente específico
Route::get('clientes/{id}', [ClienteController::class, 'show']);

// Actualizar un cliente específico
Route::put('clientes/{id}', [ClienteController::class, 'update']);

// Eliminar un cliente específico
Route::delete('clientes/{id}', [ClienteController::class, 'destroy']);


