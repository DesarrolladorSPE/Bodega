import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";
import { handleNotifications } from "../../../utils/handleNotifications";
import { WrapperContainer1 } from "../WrapperContainers";
import { InputCard } from "../InputsCards";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { ButtonCard } from "../ButtonCard";
import { reloadLocation } from "../../../utils/realoadLocation";

const EditionForm = ({ user, onClose }) => {
	const context = React.useContext(AppContext);
	const [editedData, setEditedData] = React.useState({ ...user });

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditedData({ ...editedData, [name]: value });
	};

	const submitForm = (event) => {
        event.preventDefault();
		handleUserUpdate(editedData);
	}

	const handleUserUpdate = async (updatedData) => {
		context.setLoading(true);
		try {
			const response = await fetch(`${context.apiUri}/users/${context.editingUser.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedData),
			});

			const data = await response.json();

			if (response.status === 200) {
				const updatedUsers = context.responseData?.users?.map((user) =>
					user.id === context.editingUser.id ? { ...user, ...updatedData } : user
				);
				context.setUsers(updatedUsers);
				handleNotifications("success", data.message);

				reloadLocation();
			}
			else {
				handleNotifications("error", data.message);
			}
		}
		catch (err) {
			handleNotifications("error", err.message);
		}
		finally {
			context.handleCloseEditForm();
			context.setLoading(false);
		}
	};

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