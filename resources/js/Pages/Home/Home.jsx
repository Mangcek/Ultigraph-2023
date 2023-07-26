// NAVBAR
import LogoUMNPutih1 from "../../../assets/home/LogoUMNPutih1.svg";
import LogoDKVUMN from "../../../assets/home/DKV UMN 1.svg";
import LogoAskaraArunika1 from "../../../assets/home/logo askara arunika-01 1.svg";

import supergrafisBunga1 from "../../../assets/home/supergrafis bunga (1) 2.svg";
import theDeerpa from "../../../assets/home/deerpa exhibition (tambahan)-02 1.svg";
import LogoAskaraArunika2 from "../../../assets/home/logo askara arunika-01 2.svg";
import whiteFlower from "../../../assets/home/supergrafis putih-10 1.svg";
import supergrafisBunga2 from "../../../assets/home/supergrafis bunga (1) 1.svg";
import Bazzar1 from "../../../assets/home/BAZZAR_02 (1) 1.png";
import Bazzar2 from "../../../assets/home/BAZZAR_03 1.png";
import Bazzar3 from "../../../assets/home/BAZZAR_04 (1) 1.png";
import Arrow from "../../../assets/home/Arrow.svg";

// FOOTER
import Email from "../../../assets/home/Mask group.svg";
import Instagram from "../../../assets/home/Mask group-1.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/home.scss";

export default function Home({ auth, laravelVersion, phpVersion }){
    return (
        <>
            <nav className="navbar navbar-expand-lg px-4 fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={LogoUMNPutih1} alt="logo umn" /></a>
                    <a className="navbar-brand" href="#"><img src={LogoDKVUMN} alt="logo dkv" /></a>
                    <a className="navbar-brand" href="#"><img style={{ width: '100px' }} src={LogoAskaraArunika1} alt="logo umn" /></a>
                    <button style={{ border: 'none' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-text" href="#">About Us</a>
                            <a className="nav-text" href="ourEvent.html">Our Events</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="header__section">
                    <img className="supergrafisbunga-kiri" src={supergrafisBunga1} alt="" />
                    <div className="the-box">
                        <h4 className="heading_the-box">ULTIGRAPH 2023</h4>
                        <div className="images_the-box">
                            <img className="the-deerpa" src={theDeerpa} alt="the deerpa" />
                            <img className="arunika-logo" src={LogoAskaraArunika2} alt="the askara logo" />
                            <img className="whiteflower" src={whiteFlower} alt="cahaya " />
                        </div>
                    </div>
                    <img className="supergrafisbunga-kanan" src={supergrafisBunga2} alt="" />
                </div>
                <div className="recap__section">
                    <h1 className="heading-recap__section">Our First Arthakarana Bazaar Recap</h1>
                    <div className="images-recap__section">
                        <img src={Bazzar1} alt="image 1" />
                        <img src={Bazzar2} alt="image 2" />
                        <img src={Bazzar3} alt="image 3" />
                    </div>
                </div> 
                <div className="whatscoming__section">
                    <h1 className="heading-whatscoming__section">Check Out What's Coming!</h1>
                    <div className="event__section">
                        <button className="grid-event__section a">
                            <div className="the-text">
                                <h2>COMPETITION</h2>
                                <img style={{ width: '32px' }} src={Arrow} alt="" />
                            </div>
                        </button>
                        <button className="grid-event__section b">
                            <div className="the-text">
                                <h2>PRE-EVENT</h2>
                                <img style={{ width: '32px' }} src={Arrow} alt="" />
                            </div>
                        </button>
                        <button className="grid-event__section c">
                            <div className="the-text">
                                <h2>SEMINAR & WORKSHOP</h2>
                                <img style={{ width: '32px' }} src={Arrow} alt="" />
                            </div>
                        </button>
                        <button className="grid-event__section d">
                            <div className="the-text">
                                <h2>EXHIBITION</h2>
                                <img style={{ width: '32px' }} src={Arrow} alt="" />
                            </div>
                        </button>
                        <button className="grid-event__section e">
                            <div className="the-text">
                                <h2>AWARDING NIGHT</h2>
                                <img style={{ width: '32px' }} src={Arrow} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <footer>
                <h5>Contact Us</h5>
                <div className="socialmedia">
                    <div className="the-icon">
                        <img src={Instagram} alt="instagram" />
                        <p className="my-auto"><a style={{ color: 'white', fontFamily: 'Open Sans' }} target="_blank" href="https://www.instagram.com/ultigraph">@ultigraph</a></p>
                    </div>
                    <div className="the-icon">
                        <img src={Email} alt="email" />
                        <p className="my-auto"><a style={{ color: 'white', fontFamily: 'Open Sans' }} href="mailto: ultigraph@umn.ac.id">ultigraph@umn.ac.id</a></p>
                    </div>
                </div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        </>
    );
}