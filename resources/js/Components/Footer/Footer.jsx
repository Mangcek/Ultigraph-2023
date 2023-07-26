import Email from "../../../assets/home/Mask group.svg";
import Instagram from "../../../assets/home/Mask group-1.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/Footer.scss";

const Footer = () => {
    return (
        <>
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
        </>
    );
}

export default Footer;