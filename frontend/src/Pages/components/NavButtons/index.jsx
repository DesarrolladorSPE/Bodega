import React from "react";

import { AppContext } from "../../../Context";
import { Link, NavLink } from "react-router-dom";

import "./styles.css";
import { handleLogout } from "../../../utils/handleData/handleLogout";
import { IsAuthWrapper } from "../AuthWrapper";


const NavButtons = ({className="idioma-icon-barra-superior-govco"}) => {
    const context = React.useContext(AppContext)

	const { isLoged, admin } = context;

    return(
        <div className="nav-buttons-container">
			<IsAuthWrapper>
				<Link to={"/home"} className={`${className}`}>
					Home
				</Link>
				<Link to={"/consolidado"} className={`${className}`}>
					Consolidado
				</Link>

				{admin &&
					<Link to={"/users"} className={`${className}`}>
						Usuarios
					</Link>
				}

				<button
					className={`${className}`}
					onClick={handleLogout}
				>
					Cerrar Sesión
				</button>
			</IsAuthWrapper>
        </div>
    );

}
export { NavButtons };