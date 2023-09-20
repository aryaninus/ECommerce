import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import "./Footer.scss";
import Payment from "../../assets/payments.png";
//the footer of the website
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Voluptame accusantium doloremque laundantium
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div classname="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        Punnamada
                    </div>
                </div>
                 <div classname="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                        Punnamada
                    </div>
                </div>
                 <div classname="c-item">
                    <FaEnvelope/>
                    <div className="text">
                        Punnamada
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Cateogires</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src = {Payment} alt = ""/>
            </div>
        </div>
    </footer>
};

export default Footer;
