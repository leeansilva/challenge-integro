<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*'], // Define las rutas en las que se aplicará CORS

    'allowed_methods' => ['*'], // Métodos HTTP permitidos (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => [
        'http://ututo.com.ar', // Dominio principal permitido
        'http://localhost:3000', // Dominio local permitido para desarrollo
    ],

    'allowed_origins_patterns' => [], // Patrones para orígenes dinámicos (vacío si usas 'allowed_origins')

    'allowed_headers' => ['*'], // Encabezados permitidos en las solicitudes

    'exposed_headers' => [], // Encabezados que el cliente puede ver

    'max_age' => 0, // Tiempo en segundos para que el navegador cachee las respuestas

    'supports_credentials' => false, // Define si se envían cookies o credenciales en las solicitudes
];
