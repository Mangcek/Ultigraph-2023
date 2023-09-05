<?php

namespace App\Http\Controllers;

use App\Models\Partisipan;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function talkshow(){
        
    }

    public function hackaton(){

    }

    public function miniCompetition(){

    }

    public function preEventA(Request $request){
        $data = $request->validate([
            'nama' => 'required',
            'email_public' => 'nullable',
            'email_student' => 'nullable',
            'no_telp' => 'required',
            'nim' => 'nullable',
            'angkatan' => 'nullable',
            'jurusan' => 'nullable',
        ]);  

        $user = new Partisipan();
        $user->nama = $request->nama;
        $user->email_student = $request->email_student;
        $user->email_public = $request->email_public;
        $user->no_telp = $request->no_telp;
        $user->nim = $request->nim;
        $user->angkatan = $request->angkatan;
        $user->jurusan = $request->jurusan;
        $user->save();
    }
}
