<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partisipan extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'nim',
        'angkatan',
        'jurusan',
        'email_public',
        'email_student',
        'no_telp'
    ];
}
