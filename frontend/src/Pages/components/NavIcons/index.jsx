import { ImYoutube } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaHandsAslInterpreting } from "react-icons/fa6";

import "./styles.css";
import { AppContext } from "../../../Context";
import { NavLink } from "react-router-dom";
import React from "react";

const NavIcons = ({NavBar=false,flexDirection}) => {
    const context = React.useContext(AppContext);

    const showUsersButton = () => {
        if(context.admin && NavBar) {
            return(
                <NavLink to={"/users"}>
                    <button>Usuarios</button>
                </NavLink>
            );
        } 
    }

    return (
        <div className="nav-icons-container" style={{
            flexDirection: flexDirection,
        }}>
            {showUsersButton()}
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