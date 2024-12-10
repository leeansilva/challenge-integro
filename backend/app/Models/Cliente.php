<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cliente extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['nombre', 'direccion', 'dni', 'condicion_iva'];

    protected $dates = ['deleted_at'];

    public function facturas()
    {
        return $this->hasMany(Factura::class, 'id_cliente');
    }
}
