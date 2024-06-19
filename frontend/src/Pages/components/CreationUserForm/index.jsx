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
		nombre: "",
		correo: "",
		recuperar: "pl",
		clave: "",
		tipo: 0,
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		context.setLoading(true);

		await handlePostData(event, newUserData, "/users")

		context.setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<WrapperContainer1>
				<SubTitle>Crear Usuario</SubTitle>

				<InputCard
					id={"nombre"}
					defaultValue={newUserData.nombre}
					onChange={(event) => {handleInputChange("nombre", event, setNewUserData)}}
					haveLabel={false}
					placeholder="Ingrese el nombre"
				/>
				<InputCard
					type="email"
					id={"correo"}
					defaultValue={newUserData.correo}
					onChange={(event) => {handleInputChange("correo", event, setNewUserData)}}
					haveLabel={false}
					placeholder="Ingrese el correo"
				/>
				<InputCard
					type="password"
					id={"contraseña"}
					defaultValue={newUserData.clave}
					onChange={(event) => {handleInputChange("clave", event, setNewUserData)}}
					haveLabel={false}
					placeholder="Ingrese la contraseña"
				/>

				<div className="input-container">
					<label htmlFor={"tipo"}>Seleccione el tipo de usuario</label>
					<select
						name={"tipo"}
						id={"tipo"}
						onChange={(event) => {handleInputChange("tipo", event.target.value, setNewUserData)}}
						value={newUserData.tipo}
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