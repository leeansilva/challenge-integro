<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Define los orígenes permitidos
        $allowedOrigins = ['https://ututo.com.ar', 'http://localhost:3000', 'https://challenge-integro.vercel.app'];

        // Si el origen de la solicitud está en la lista permitida
        if (in_array($request->header('Origin'), $allowedOrigins)) {
            // Agregar las cabeceras CORS
            return $next($request)
                ->header('Access-Control-Allow-Origin', $request->header('Origin'))
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                ->header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
        }

        return $next($request);
    }
}
