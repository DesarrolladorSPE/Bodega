import React from "react";
import { NavIcons } from "../NavIcons";

import { AppContext } from "../../../Context";

import "./styles.css";

const NavBarResponsive = () => {
    const context = React.useContext(AppContext);

    const renderNabvarResponsive = () => {
        if (context.toggleNavBarResponsive && context.windowWidth <= 800) {
            return(
                <div className="navbar-responsive-container">
                    <NavIcons
                        flexDirection={"column"}
                    />
                    <div className="navbar-responsive-text-container">
                        <a href="https://www.youtube.com/user/ServiciodEmpleo" title="YouTube - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                            YouTUbe
                        </a>
                        <a href="https://www.instagram.com/servicioempleocol/" title="Instagram - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <a href="https://twitter.com/ServiciodEmpleo" title="Twitter - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                        <a href="https://www.facebook.com/SPEColombia" title="Facebook - Servicio Publico de Empleo" target="__blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PLR3vDr9Xh9bHEXggcO-0Bz1_UiaCCwqdh" title="Vídeos para la inclusión laboral de personas con discapacidad" target="__blank" rel="noopener noreferrer">
                            Lenguaje de Señas
                        </a>
                        <button title="Aplicar y quitar alto contraste para esta pagina">
                            Aplicar alto contraste
                        </button>
                    </div>
                </div>
                );
        }
    }

    return(
        <>
            {renderNabvarResponsive()}
        </>
        
    );
}

export { NavBarResponsive };