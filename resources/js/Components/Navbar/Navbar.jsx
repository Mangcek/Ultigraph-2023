import LogoUMNPutih1 from "../../../assets/home/LogoUMNPutih1.svg";
import LogoDKVUMN from "../../../assets/home/DKV UMN 1.svg";
import LogoAskaraArunika1 from "../../../assets/home/logo askara arunika-01 1.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/Navbar.scss";

import { useState, useEffect, useRef } from "react";

const Navbar = (props) => {
    const [current, setCurrent] = useState(props.current);
    const [hamburger, setHamburger] = useState(false);
    const [color, setColor] = useState(props.color);
  
    const Hamburger = useRef(null);
  
    // HANLDE CLOSE HAMBURGER
    useEffect(() => {
      const handleClickOutsideHamburger = (event) => {
        if (!hamburger == false) {
          if (Hamburger.current && !Hamburger.current.contains(event.target)) {
            setHamburger(false);
          }
        }
      };
      document.addEventListener("click", handleClickOutsideHamburger, true);
      return () => {
        document.removeEventListener("click", handleClickOutsideHamburger, true);
      };
    }, [hamburger]);

    return (
        <>
            <div className="navbar" style={{backgroundColor:`${color}`}}>
                <div className="navbar-kiri">
                    <a className="logoNavbar" href="#"><img src={LogoUMNPutih1} alt="logo umn" /></a>
                    <a className="logoNavbar" href="#"><img src={LogoDKVUMN} alt="logo dkv" /></a>
                    <a className="logoNavbar" href="/"><img style={{ width: '100px' }} src={LogoAskaraArunika1} alt="logo umn" /></a>
                </div>
                <div className="navbar-kanan">
                    <div className="navbar-dropdown">
                        {current == "AboutUs" 
                            ? (<a href="/aboutus"><button className="navbar-dropdown-button current">About Us</button></a>) 
                            : (<a href="/aboutus"><button className="navbar-dropdown-button">About Us</button></a>) 
                        }
                        {current == "Event" 
                            ? (<a href="/event"><button className="navbar-dropdown-button current">Our Events</button></a>) 
                            : (<a href="/event"><button className="navbar-dropdown-button" disabled>Our Events</button></a>) 
                        }
                    </div>
                </div>
                <div className="navbar-mobile">
                <button ref={Hamburger} onClick={() => setHamburger(!hamburger)} className="navbar-hamburger-button">
                    ≡
                </button>
                {hamburger ? (
                    <div className="navbar-hamburger-content" style={{backgroundColor:`${color}`}}>
                        <a className="navbar-mobile-content" href="/aboutus">About Us</a>
                        <a className="navbar-mobile-content" href="/event" disabled>Our Events</a>
                    </div>
                ) : null}
                </div>
            </div>


            {/* <nav class="navbar navbar-expand-lg px-4 fixed-top">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#"><img src={LogoUMNPutih1} alt="logo umn" /></a>
                    <a className="navbar-brand" href="#"><img src={LogoDKVUMN} alt="logo dkv" /></a>
                    <a className="navbar-brand" href="#"><img style={{ width: '100px' }} src={LogoAskaraArunika1} alt="logo umn" /></a>
                    <button style={{ border: 'none' }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                        <a class="nav-text" href="/aboutus">About Us</a>
                        <a class="nav-text" href="/event">Our Events</a>
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    );
}

export default Navbar;