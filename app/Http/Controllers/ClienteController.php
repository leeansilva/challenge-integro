<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Factura;

class ClienteController extends Controller
{
    public function index()
    {
        return response()->json(Cliente::with('facturas')->get(), 200);
    }

    public function store(Request $request)
    {
        $messages = [
            'nombre.required' => 'El campo nombre es obligatorio.',
            'nombre.string' => 'El campo nombre debe ser una cadena de texto.',
            'nombre.max' => 'El campo nombre no puede exceder los 100 caracteres.',
            'dni.required' => 'El campo DNI es obligatorio.',
            'dni.min' => 'El campo DNI debe tener minimo 9 caracteres.',
            'dni.unique' => 'El DNI ya está registrado.',
            'condicion_iva.required' => 'El campo condición IVA es obligatorio.',
            'condicion_iva.in' => 'El campo condición IVA debe ser uno de los siguientes valores: A, B, C.',
        ];
    
        try {
            $request->validate([
                'nombre' => 'required|string|max:100',
                'direccion' => 'nullable|string|max:100',
                'dni' => 'required|min:7|unique:clientes',
                'condicion_iva' => 'required|in:A,B,C',
            ], $messages);
    
            $cliente = Cliente::create($request->all());
    
            return response()->json($cliente, 201);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Errores de validación',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Hubo un error al procesar la solicitud',
                'error' => $e->getMessage()
            ], 500);
        }
    }    

    public function show($id)
    {
        $cliente = Cliente::with('facturas')->find($id);

        if (!$cliente) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        return response()->json($cliente, 200);
    }

    public function update(Request $request, $id)
    {
        try {
            $cliente = Cliente::find($id);
    
            if (!$cliente) {
                return response()->json(['message' => 'Cliente no encontrado'], 404);
            }
    
            $messages = [
                'nombre.required' => 'El campo nombre es obligatorio.',
                'nombre.string' => 'El campo nombre debe ser una cadena de texto.',
                'nombre.max' => 'El campo nombre no puede exceder los 100 caracteres.',
                'dni.required' => 'El campo DNI es obligatorio.',
                'dni.min' => 'El campo DNI debe tener minimo 7 caracteres.',
                'dni.unique' => 'El DNI ya está registrado.',
                'condicion_iva.required' => 'El campo condición IVA es obligatorio.',
                'condicion_iva.in' => 'El campo condición IVA debe ser uno de los siguientes valores: A, B, C.',
            ];
    
            $request->validate([
                'nombre' => 'required|string|max:100',
                'direccion' => 'nullable|string|max:100',
                'dni' => 'required|min:7|unique:clientes,dni,' . $id,
                'condicion_iva' => 'required|in:A,B,C',
            ], $messages);
    
            $cliente->update($request->all());
    
            return response()->json($cliente, 200);
    
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Errores de validación',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Hubo un error al procesar la solicitud',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    

    public function destroy($id)
    {
        try {
            $cliente = Cliente::find($id);
    
            if (!$cliente) {
                return response()->json(['message' => 'Cliente no encontrado'], 404);
            }
    
            $cliente->delete();
    
            return response()->json(['message' => 'Cliente eliminado satisfactoriamente.'], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Hubo un error al procesar la solicitud',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
}
