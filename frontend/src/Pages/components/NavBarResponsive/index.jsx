import React from "react";
import { NavIcons } from "../NavIcons";

import { AppContext } from "../../../Context";

import "./styles.css";
import { NavLink } from "react-router-dom";

const NavBarResponsive = () => {
    const context = React.useContext(AppContext);

	const showUsersButton = () => {
        if(context.admin) {
            return(
                <NavLink className="anchor-no-animation" to={"/users"}>
                    <button className="nav-button users-button">Usuarios</button>
                </NavLink>
            );
        }
    }

	const showCloseSessionButton = () => {
        if(context.isLoged) {
            return(
				<>
					<button
						className="nav-button users-button"
						onClick={() => context.setShowConsolidado(!context.showConsolidado)}
					>
						Consolidar
					</button>

					<button
						className="nav-button close-session-button"
						onClick={() => context.closeSession()}
					>
						Cerrar Sesión
					</button>
				</>

            );
        }
    }

    const renderNabvarResponsive = () => {
        if (context.toggleNavBarResponsive && context.windowWidth <= 800) {
            return(
				<div className="navbar-responsive-container">
					<div className="navbar-responsive-anchors-container">
						<NavIcons
							NavBar={false}
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
						</div>
					</div>
					<div className="navbar-responsive-buttons-container">
						{showUsersButton()}
						{showCloseSessionButton()}
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