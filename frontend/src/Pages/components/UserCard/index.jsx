import { BiEdit } from "react-icons/bi";

import { SubTitle } from "../SubTitle";
import "./styles.css";

const UserCard = ({data, handleEditClick}) => {
    const RolUser = (type) => {
        if(type === 1) {
            return(
                <SubTitle textAlign="start">Administrador</SubTitle>
            );
        }
        else if(type === 0) {
            return(
                <SubTitle textAlign="start">Usuario Básico</SubTitle>
            );
        }
    }

    return(
        <div className="users-card-container">
            <div className="users-all-info-container">
				<div className="name-and-email-info-container">
					<div className="users-info-container">
						<p>Nombre:</p>
						<SubTitle textAlign="start">{data?.nombre}</SubTitle>
					</div>
					<div className="users-info-container">
						<p>Correo:</p>
						<SubTitle textAlign="start">{data?.correo}</SubTitle>
					</div>
				</div>

                <div className="users-info-container">
                    <p>Rol:</p>
                    {RolUser(data?.tipo)}
                </div>
            </div>

            <button className="users-edit-button"
				onClick={handleEditClick}
			>
                <BiEdit/>
            </button>

        </div>
    );
}

export { UserCard };