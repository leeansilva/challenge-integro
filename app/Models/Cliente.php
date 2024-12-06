<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'direccion', 'dni', 'condicion_iva'];

    public function facturas()
    {
        return $this->hasMany(Factura::class, 'id_cliente');
    }
}

