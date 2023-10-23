import { BiEdit } from "react-icons/bi";

import { SubTitle } from "../SubTitle";
import "./styles.css";

const UserCard = ({data}) => {
    const RolUser = (type) => {
        if(type === 1) {
            return(
                <SubTitle>Administrador</SubTitle>
            );
        }
        else if(type === 0) {
            return(
                <SubTitle>Usuario Básico</SubTitle>
            );
        }
    }

    return(
        <div className="users-card-container">
            <div className="users-all-info-container">
                <div className="users-info-container">
                    <p>Nombre:</p>
                    <SubTitle>{data?.nombre}</SubTitle>
                </div>
                <div className="users-info-container">
                    <p>Correo:</p>
                    <SubTitle>{data?.correo}</SubTitle>
                </div>
                <div className="users-info-container">
                    <p>Rol:</p>
                    {RolUser(data?.tipo)}
                </div>
            </div>

            <button className="users-edit-button">
                <BiEdit/>
            </button>

        </div>
    );
}

export { UserCard };