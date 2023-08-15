import { Link, Head } from '@inertiajs/react';

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../../css/OurEvent.scss";
import lightPurple from "../../../assets/ourEvent/supergraphic ulti cahaya ungu 1.svg";



export default function OurEvent({ auth, laravelVersion, phpVersion }){
    // const dataEvent = [
    //     {
    //         key: 1,
    //         title: "PRE-EVENT",
    //         date: "12-22 September 2023",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
    //     },
    //     {
    //         key: 2,
    //         title: "SEMINAR & WORKSHOP",
    //         date: "6-10 November 2023",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
    //     },
    //     {
    //         key: 3,
    //         title: "COMPETITION",
    //         date: "23 September - 28 Oktober 2023",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
    //     },
    //     {
    //         key: 4,
    //         title: "EXHIBITON",
    //         date: "6-17 November 2023",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
    //     },
    //     {
    //         key: 5,
    //         title: "AWARDING NIGHT",
    //         date: "11 November 2023",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
    //     },
    // ]

    return (
        <>
            <Head title="Our Event" />
            <Navbar current="Event"/>
            <div className="ourevent">
                <div className="title">
                    <img className="cahaya" src={lightPurple} />
                    <h1>OUR EVENT</h1>
                    <img className="cahaya" src={lightPurple} />
                </div>
                {/* <div className="div">
                    {dataEvent.map((item, index) => (
                        <div key={index} className="theEvents">
                            <div className="boxEvents">
                                <div className="preEvent">
                                    <h2>{item.title}</h2>
                                    <hr />
                                    <h3>{item.date}</h3>
                                </div>
                                <div className="descPre">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="theEvents">
                    <div className="boxEvents">
                        <div className="preEvent">
                            <div className="evTitle" id='abu1'>
                                <h2>PRE-EVENT</h2>
                            </div>
                            <hr />
                            <h3>12-22 September 2023</h3>
                        </div>
                        <div className="descBox">
                            <p>Pre-Event Ultigraph 2023 akan dimulai dari bulan September hingga Oktober 2023. Kegiatan Pre-Event terdiri dari, Hackathon dengan tema "Mainan Bapak Doeloe", Talkshow "Revitalisasi Media Melukis", dan yang terakhir adalah Mini Competition dengan Lomba design sticker, Lomba Tik tok, dan Lomba Portofolio.</p>
                        </div>
                    </div>
                    <div className="boxEvents">
                        <div className="semWork">
                            <div className="evTitle" id='oren1'>
                                <h2>SEMINAR & WORKSHOP</h2>
                            </div>
                            <hr />
                            <h3>6-10 November 2023</h3>
                        </div>
                        <div className="descBox">
                            <p>Seminar & Workshop adalah acara Ultigraph yang terdiri dari presentasi materi yang menawan dan pengetahuan praktis langsung yang dipimpin oleh pembicara terkemuka dan kredibel - wawasan dan pengetahuan dalam dunia desain profesional yang tidak akan Anda temukan di tempat lain.</p>
                        </div>
                    </div>
                    <div className="boxEvents">
                        <div className="competition">
                            <div className="evTitle" id='abu2'>
                                <h2>COMPETITION</h2>
                            </div>
                            <hr />
                            <h3>23 September - 28 Oktober 2023</h3>
                        </div>
                        <div className="descBox">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                        </div>
                    </div>
                    <div className="boxEvents" id="event4">
                        <div className="exhibition">
                            <div className="evTitle" id='oren2'>
                                <h2>EXHIBITION</h2>
                            </div>
                            <hr />
                            <h3>6-17 November 2023</h3>
                        </div>
                        <div className="descBox">
                            <p>Pameran Ultigraph 2023 berjudul 'Kita Harus Pulang' adalah ruang seni terbuka yang menyatukan nilai tradisi dan seni modern. Acara ini menggambarkan kekisruhan kita sebagai individu modern yang menginginkan kembali ke akar tradisi tanpa mengabaikan nilai-nilai budaya. Dengan tema ini, Ultigraph 2023 berupaya meresapi kembali kekayaan budaya yang telah ada, sehingga para audiens merasa terhubung dan terinspirasi untuk memelihara warisan ini sebagai pewaris masa depan.</p>
                        </div>
                    </div>
                    <div className="boxEvents">
                        <div className="awarding">
                            <div className="evTitle" id='abu3'>
                                <h2>AWARDING NIGHT</h2>
                            </div>
                            
                            <hr />
                            <h3>11 November 2023</h3>
                        </div>
                        <div className="descBox">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}