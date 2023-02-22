import "./Footer.scss";
import FooterImg from "../../img/footer-logo.png";
import XingLogo from "../../img/xing-logo.png";
import LinkedinLogo from "../../img/linkedin-logo.png";
import qr from "../../img/QR.png";

 
function Footer() {

    return (
        <div className="footer aos-init aos-animate" data-aos="fade" data-aos-duration="500">
            
            <div>
                <div className="footer-img">
                    <img src={FooterImg} alt="" />
                </div>
                <div>
                    <img src={qr} />
                </div>
            </div>


            <div>
                <p className="connect">
                    <b>
                        Connect
                    </b>
                </p>
                <div className="footer-social">
                    <div className="xing">
                        <a href="https://www.xing.com/companies/b&blogistics">
                            <img src={XingLogo} alt="" />
                        </a>
                    </div>

                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/b&b-logistic">
                            <img src={LinkedinLogo} alt="" />
                        </a>
                    </div>
                </div>

                <p>
                    <b>
                        We create opportunities
                    </b>
                </p>
            </div>
            <div className="footer-right">
                <b>B&B LOGISTICS, SRL<br/> </b>str. Zelinski 7, of. 210 <br/> CHISINAU <br/>MD-2015 R. of Moldova 
            </div>
           
            
            <div className="footer-right">
                +373 62 111603<br/> +373 62 111609<br/>+373 22 660200
            </div>
        </div>
    );
}

export default Footer;