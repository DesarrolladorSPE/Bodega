import React from "react";

import { NavIcons } from "../NavIcons";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";

import "./styles.css"
import { AppContext } from "../../../Context";



const Navbar = () => {
    const context = React.useContext(AppContext);

    return (
        <div className="navbar-container">
            <a className="banner-image" href="https://www.serviciodeempleo.gov.co/portada" title="Ir a Servicio Publico de Empleo" rel="noopener noreferrer">
                <img src="/banner.png" alt="Ir a Servicio Publico de Empleo" />
            </a>    

            {context.windowWidth <= 800 ?
                <button className="close-open-button" onClick={() => { context.setToggleNavBarResponsive(!context.toggleNavBarResponsive) }}>
                    {context.toggleNavBarResponsive ? <AiOutlineClose /> : <AiOutlineBars/> }
                </button>
                :
                <NavIcons
                    direction={"row"}
                />
            }

        </div>
    );
}

export {Navbar};