import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";

const EditionForm = ({ user, onClose }) => {
	const context = React.useContext(AppContext);
	const [editedData, setEditedData] = React.useState({ ...user });

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditedData({ ...editedData, [name]: value });
		console.log(editedData);
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
				const updatedUsers = context.users.map((user) =>
					user.id === context.editingUser.id ? { ...user, ...updatedData } : user
				);
				context.setUsers(updatedUsers);
				context.messageHandler("all-ok", data.message);
			}
			else {
				context.messageHandler("error", data.message);
			}
		} catch (err) {
			context.messageHandler("error", err.message);
		} finally {
			context.handleCloseEditForm();
			context.setLoading(false);
		}
	};

	return (
		<div className="edit-user-form-container">
			<div className="edit-user-form">
				<Title
					color={"#FFF"}
					borderColor={"#FFF"}
				>
					Editar Usuario:
				</Title>
				<form
					onSubmit={submitForm}
				>
					<div className="edit-user-input-container">
						<SubTitle
							textAlign="start"
						>
							Nombre:
						</SubTitle>
						<input
							type="text"
							name="nombre"
							value={editedData.nombre}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-user-input-container">
						<SubTitle
							textAlign="start"
						>
							Correo:
						</SubTitle>
						<input
							type="text"
							name="correo"
							value={editedData.correo}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-user-input-container">
						<SubTitle
							textAlign="start"
						>
							Rol de Usuario:
						</SubTitle>
						<select
							className="select-rol-container"
							name="tipo"
							id="tipo"
							type="select"
							onChange={handleInputChange}
							defaultValue={editedData.tipo}
						>
							<option name="tipo" value={0}>
								Usuario Basico
							</option>
							<option name="tipo" value={1}>
								Administrador
							</option>

						</select>
					</div>
					<div className="buttons-container">
						<button className="form-button save" type="submit">
							Guardar Cambios
						</button>
						<button className="form-button cancel" type="button" onClick={onClose}>
							Cancelar
						</button>
					</div>

				</form>
			</div>
		</div>

	);
}

export { EditionForm };