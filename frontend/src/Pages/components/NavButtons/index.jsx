import React from "react";

import { AppContext } from "../../../Context";
import { Link, NavLink } from "react-router-dom";

import "./styles.css";


const NavButtons = ({className="idioma-icon-barra-superior-govco"}) => {
    const context = React.useContext(AppContext)

	const { isLoged, admin } = context;

    const handleNavButtons = () => {
        if(admin) {
            return(
                <>
                    <Link to={"/home"} className={`${className}`}>
                        Home
                    </Link>
                    <Link to={"/consolidado"} className={`${className}`}>
						Consolidado
                    </Link>
                    <Link to={"/users"} className={`${className}`}>
                        Usuarios
                    </Link>
                      <button
                        className={`${className}`}
                        onClick={context.closeSession}
                    >
                        Cerrar Sesión
                    </button>
                </>

            );
        } else if (isLoged) {
            return(
                <>
                    <Link to={"/home"} className={`${className}`}>
                        Home
                    </Link>
                    <Link to={"/consolidado"} className={`${className}`}>
						Consolidado
                    </Link>
                      <button
                        className={`${className}`}
                        onClick={context.closeSession}
                    >
                        Cerrar Sesión
                    </button>
                </>

            );
        }
    }

    return(
        <div className="nav-buttons-container">
            {handleNavButtons()}
        </div>
    );

}
export { NavButtons };