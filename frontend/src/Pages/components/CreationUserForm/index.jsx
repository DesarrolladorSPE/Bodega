import React from "react";

import "./styles.css";
import { SubTitle } from "../SubTitle";
import { WrapperContainer1 } from "../WrapperContainers";
import { InputCard } from "../InputsCards";
import { handleInputChange } from "../../../utils/handleInputChange";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { ButtonCard } from "../ButtonCard";
import { handlePostData } from "../../../utils/handleData/handlePostData";
import { AppContext } from "../../../Context";

const CreationUserForm = ({ onClose }) => {
	const context = React.useContext(AppContext)

	const [newUserData, setNewUserData] = React.useState({
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
		recuperar: "pl",
		type: 0,
    })

    const handleRegister = async (event) => {
        event.preventDefault();

        context.setLoading(true);
        await handlePostData(event, newUserData, "/user/register");

        context.setLoading(false);
    }

	return (
		<form onSubmit={handleRegister}>
			<WrapperContainer1>
				<SubTitle>Crear Usuario</SubTitle>

				<InputCard
					id={"nombre"}
					defaultValue={newUserData.name}
					onChange={(event) => {handleInputChange("name", event, setNewUserData)}}
					haveLabel={false}
					placeholder="Ingrese el nombre"
				/>
				<InputCard
					type="email"
					id={"correo"}
					defaultValue={newUserData.email}
					onChange={(event) => {handleInputChange("email", event, setNewUserData)}}
					haveLabel={false}
					placeholder="Ingrese el correo"
				/>
				<InputCard
					type="password"
					id={"password"}
					defaultValue={newUserData.password}
					onChange={(event) => {handleInputChange("password", event, setNewUserData)}}
					haveLabel={false}
					placeholder="Ingrese la contraseña"
				/>
				<InputCard
					type="password"
					id={"confirm-password"}
					defaultValue={newUserData.confirmPassword}
					onChange={(event) => {handleInputChange("confirmPassword", event, setNewUserData)}}
					haveLabel={false}
					placeholder="Confirme la contraseña"
				/>

				<div className="input-container">
					<label htmlFor={"tipo"}>Seleccione el tipo de usuario</label>
					<select
						name={"type"}
						id={"type"}
						onChange={(event) => {handleInputChange("type", event.target.value, setNewUserData)}}
						value={newUserData.type}
					>
						<option value={0}>Usuario Basico</option>
						<option value={1}>Administrador</option>
					</select>
				</div>

				<AllInfoGridContainer className="grid-1-1">
					<ButtonCard type="submit" title="Guardar Usuario">Guardar</ButtonCard>
					<ButtonCard title="Guardar Usuario" onClick={onClose}>Cancelar</ButtonCard>
				</AllInfoGridContainer>

			</WrapperContainer1>

		</form>

	);
};

export { CreationUserForm };