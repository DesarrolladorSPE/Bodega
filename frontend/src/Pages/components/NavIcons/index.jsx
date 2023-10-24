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
                <NavLink className="anchor-no-animation" to={"/users"}>
                    <button className="nav-button users-button">Usuarios</button>
                </NavLink>
            );
        }
    }

	const showCloseSessionButton = () => {
        if(context.isLoged && NavBar) {
            return(
				<button
					className="nav-button close-session-button"
					onClick={() => context.closeSession()}
				>
					Cerrar Sesión
				</button>
            );
        }
    }

    return (
        <div className="nav-icons-container" style={{
            flexDirection: flexDirection,
        }}>
            <a className="nav-icon" href="https://www.youtube.com/user/ServiciodEmpleo" title="YouTube - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <ImYoutube />
            </a>
            <a className="nav-icon" href="https://www.instagram.com/servicioempleocol/" title="Instagram - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
            </a>
            <a className="nav-icon" href="https://twitter.com/ServiciodEmpleo" title="Twitter - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
            <a className="nav-icon" href="https://www.facebook.com/SPEColombia" title="Facebook - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                <BsFacebook />
            </a>
            <a className="nav-icon" href="https://www.youtube.com/playlist?list=PLR3vDr9Xh9bHEXggcO-0Bz1_UiaCCwqdh" title="Vídeos para la inclusión laboral de personas con discapacidad" target="__blank" rel="noopener noreferrer">
                <FaHandsAslInterpreting/>
            </a>
            {showUsersButton()}
			{showCloseSessionButton()}
        </div>
    );

}
export {NavIcons}