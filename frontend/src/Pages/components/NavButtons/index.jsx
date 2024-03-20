import React from "react";

import { AppContext } from "../../../Context";
import { NavLink } from "react-router-dom";

import "./styles.css";


const NavButtons = ({NavBar=true,flexDirection}) => {
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

    return (
        <div className="nav-buttons-container" style={{
            flexDirection: flexDirection,
        }}>
            <div className="nav-icons-container">
                {showUsersButton()}
                {showCloseSessionButton()}
            </div>
        </div>
    );

}
export { NavButtons };