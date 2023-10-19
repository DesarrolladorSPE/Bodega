import { ImYoutube } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { ImBrightnessContrast } from "react-icons/im";

import "./styles.css";

const NavIcons = ({flexDirection}) => {
    return (
        <div className="nav-icons-container" style={{
            flexDirection: flexDirection,
        }}>
            <a href="https://www.youtube.com/user/ServiciodEmpleo" title="YouTube - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <ImYoutube />
            </a>
            <a href="https://www.instagram.com/servicioempleocol/" title="Instagram - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
            </a>
            <a href="https://twitter.com/ServiciodEmpleo" title="Twitter - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
            <a href="https://www.facebook.com/SPEColombia" title="Facebook - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <BsFacebook />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLR3vDr9Xh9bHEXggcO-0Bz1_UiaCCwqdh" title="Vídeos para la inclusión laboral de personas con discapacidad" target="__blank" rel="noopener noreferrer">
                <FaHandsAslInterpreting/>
            </a>
        </div>
    );

}
export {NavIcons}