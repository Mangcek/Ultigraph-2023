import { Link, Head } from '@inertiajs/react';
import { Axios } from 'axios';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../../css/DaftarPreEvent.scss";

import BackButton from "../../../assets/daftar-preevent/ArrowLeft.png";
import BungaKiri from "../../../assets/daftar-preevent/BungaKiri.svg";
import BungaKanan from "../../../assets/daftar-preevent/BungaKanan.svg";

export default function DaftarPreEvent({ auth, laravelVersion, phpVersion }){
    function submitForm() {
        const form = document.getElementById('formRegisA');
        const formData = new FormData(form);
    
        Axios.post('/formPreEvent', formData)
          .then(function (response) {
            //
          })
          .catch(function (error) {
            //
          });
    }
    return (
        <>
            <Navbar color="#F37786"/>
            <Head title="Daftar Pre-Event" />
            <form className="daftar-preevent" id='formRegisA'>
                <img className="bunga-kiri" src={BungaKiri} alt="" />
                <img className="bunga-kanan" src={BungaKanan} alt="" />
                <div className="judul">
                    <a href="/pre-event" className="box-back">
                        <img className="back" src={BackButton} alt="" />
                    </a>
                    <div className="box-text">
                        <p className="text">PENDAFTARAN PRE-EVENT</p>
                    </div>
                </div>
                <div className="konten">
                    <div className="box-input">
                        <p className="label">Nama Lengkap:</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="garis"></div>
                    <div className="box-input">
                        <p className="label">Email:</p>
                        <div className="box-email">
                            <p className="label-email">Pribadi</p>
                            <input className="input-email" type="text" />
                        </div>
                    </div>
                    <div className="box-input">
                        <p className="label"></p>
                        <div className="box-email">
                            <p className="label-email">Student *khusus mahasiswa UMN</p>
                            <input className="input-email" type="text" />
                        </div>
                    </div>
                    <div className="garis"></div>
                    <div className="box-input">
                        <p className="label">No. Telepon:</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="garis"></div>
                    <p className="label-box">*khusus mahasiswa UMN</p>
                    <div className="box-input input-3">
                        <p className="label">NIM:</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="box-input input-3">
                        <p className="label">Angkatan:</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="box-input input-3">
                        <p className="label">Jurusan:</p>
                        <input className="input" type="text" />
                    </div>
                </div>
                <button className="submit" onClick={submitForm}>SUBMIT</button>
            </form>
            <Footer />
        </>
    );
}