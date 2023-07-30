import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import supergrafisBunga1 from "../../../assets/home/supergrafis bunga (1) 2.svg";
import theDeerpa from "../../../assets/home/deerpa exhibition (tambahan)-02 1.svg";
import LogoAskaraArunika2 from "../../../assets/home/logo askara arunika-01 2.svg";
import whiteFlower from "../../../assets/home/supergrafis putih-10 1.svg";
import supergrafisBunga2 from "../../../assets/home/supergrafis bunga (1) 1.svg";
import Bazzar1 from "../../../assets/home/BAZZAR_02 (1) 1.png";
import Bazzar2 from "../../../assets/home/BAZZAR_03 1.png";
import Bazzar3 from "../../../assets/home/BAZZAR_04 (1) 1.png";
import Arrow from "../../../assets/home/Arrow.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/home.scss";

import { Link, Head } from '@inertiajs/react';
import { useState, useEffect, useRef } from "react";

export default function Home({ auth, laravelVersion, phpVersion }){

    const [modal, setModal] = useState(false);
  
    const Modal = useRef(null);
  
    // HANLDE CLOSE MODAL
    useEffect(() => {
      const handleClickRemoveModal = (event) => {
        if (!modal == false) {
          if (Modal.current) {
            setModal(false);
          }
        }
      };
      document.addEventListener("click", handleClickRemoveModal, true);
      return () => {
        document.removeEventListener("click", handleClickRemoveModal, true);
      };
    }, [modal]);

    return (
        <>

            <Navbar color="#F37786"/>
            <Head title="Home" />
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
                        <button className="grid-event__section a" onClick={() => setModal(!modal)}>
                            <div className="the-text">
                                <h2>COMPETITION</h2>
                                {/* <img style={{ width: '32px' }} src={Arrow} alt="" /> */}
                            </div>
                        </button>
                        <button className="grid-event__section b" onClick={() => setModal(!modal)}>
                            <div className="the-text">
                                <h2>PRE-EVENT</h2>
                                {/* <img style={{ width: '32px' }} src={Arrow} alt="" /> */}
                            </div>
                        </button>
                        <button className="grid-event__section c" onClick={() => setModal(!modal)}>
                            <div className="the-text">
                                <h2>SEMINAR & WORKSHOP</h2>
                                {/* <img style={{ width: '32px' }} src={Arrow} alt="" /> */}
                            </div>
                        </button>
                        <button className="grid-event__section d" onClick={() => setModal(!modal)}>
                            <div className="the-text">
                                <h2>EXHIBITION</h2>
                                {/* <img style={{ width: '32px' }} src={Arrow} alt="" /> */}
                            </div>
                        </button>
                        <button className="grid-event__section e" onClick={() => setModal(!modal)}>
                            <div className="the-text">
                                <h2>AWARDING NIGHT</h2>
                                {/* <img style={{ width: '32px' }} src={Arrow} alt="" /> */}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            {modal ? 
                <div ref={Modal} id="comingsoon" className="comingsoon">
                    <div className="modal-content">
                        <p className="text">COMING SOON</p>
                    </div>
                </div>
            : null }
        </>
    );
}