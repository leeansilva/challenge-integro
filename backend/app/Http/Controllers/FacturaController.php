<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Factura;
use App\Models\Cliente;

class FacturaController extends Controller
{
    public function index()
    {
        return response()->json(Factura::with('cliente')->get(), 200);
    }

    public function store(Request $request)
    {
        $messages = [
            'nro_factura.required' => 'El campo número de factura es obligatorio.',
            'nro_factura.unique' => 'El número de factura ya está registrado.',
            'importe.required' => 'El campo importe es obligatorio.',
            'importe.numeric' => 'El campo importe debe ser un número.',
            'importe.min' => 'El importe debe ser mayor a 0.',
            'id_cliente.required' => 'El campo cliente es obligatorio.',
            'id_cliente.exists' => 'El cliente no existe.',
        ];
    
        try {
            $request->validate([
                'nro_factura' => 'required|unique:facturas',
                'importe' => 'required|numeric|min:0',
                'id_cliente' => 'required|exists:clientes,id',
            ], $messages);
    
            $factura = Factura::create($request->all());
    
            return response()->json($factura, 201);
            
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
        $factura = Factura::with('cliente')->find($id);

        if (!$factura) {
            return response()->json(['message' => 'Factura no encontrada'], 404);
        }

        return response()->json($factura, 200);
    }

    public function update(Request $request, $id)
    {
        try {
            $factura = Factura::find($id);
    
            if (!$factura) {
                return response()->json(['message' => 'Factura no encontrada'], 404);
            }
    
            $messages = [
                'nro_factura.required' => 'El campo número de factura es obligatorio.',
                'nro_factura.unique' => 'El número de factura ya está registrado.',
                'importe.required' => 'El campo importe es obligatorio.',
                'importe.numeric' => 'El campo importe debe ser un número.',
                'importe.min' => 'El importe debe ser mayor a 0.',
                'id_cliente.required' => 'El campo cliente es obligatorio.',
                'id_cliente.exists' => 'El cliente no existe.',
            ];
    
            $request->validate([
                'nro_factura' => 'required|unique:facturas,nro_factura,' . $id,
                'importe' => 'required|numeric|min:0',
                'id_cliente' => 'required|exists:clientes,id',
            ], $messages);
    
            $factura->update($request->all());
    
            return response()->json($factura, 200);
    
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
            $factura = Factura::find($id);
    
            if (!$factura) {
                return response()->json(['message' => 'Factura no encontrada'], 404);
            }
    
            $factura->delete();
    
            return response()->json(['message' => 'Factura eliminada satisfactoriamente.'], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Hubo un error al procesar la solicitud',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
