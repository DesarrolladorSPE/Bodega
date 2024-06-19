import React from "react";
import { AppContext } from "../../../Context";

import { SubTitle } from "../SubTitle";
import { WrapperContainer1 } from "../WrapperContainers";
import { InputCard } from "../InputsCards";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { ButtonCard } from "../ButtonCard";
import { handlePutData } from "../../../utils/handleData/handlePutData";
import { handleInputChange } from "../../../utils/handleInputChange";

import "./styles.css";

const EditionForm = ({ user, onClose }) => {
	const context = React.useContext(AppContext);
	const [editedData, setEditedData] = React.useState({ ...user });

	const submitForm = async (event) => {
        event.preventDefault();
		context.setLoading(true);

		await handlePutData(event, editedData, "/users");

		context.setLoading(false);
	}

	return (
		<form onSubmit={submitForm}>
			<WrapperContainer1>
				<SubTitle>Editar Usuario</SubTitle>

				<InputCard
					id={"nombre"}
					defaultValue={editedData.nombre}
					onChange={(event) => {handleInputChange("nombre", event, setEditedData)}}
					haveLabel={false}
					placeholder="Ingrese el nombre"
				/>
				<InputCard
					type="email"
					id={"correo"}
					defaultValue={editedData.correo}
					onChange={(event) => {handleInputChange("correo", event, setEditedData)}}
					haveLabel={false}
					placeholder="Ingrese el correo"
				/>
				<InputCard
					type="password"
					id={"contraseña"}
					defaultValue={editedData.clave}
					onChange={(event) => {handleInputChange("clave", event, setEditedData)}}
					haveLabel={false}
					placeholder="Ingrese la contraseña"
				/>

				<div className="input-container">
					<label htmlFor={"tipo"}>Seleccione el tipo de usuario</label>
					<select
						name={"tipo"}
						id={"tipo"}
						onChange={(event) => {handleInputChange("tipo", event.target.value, setEditedData)}}
						value={editedData.tipo}
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
}

export { EditionForm };