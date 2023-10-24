import React from "react";
import { AppContext } from "../../../Context";

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
		<div className="edit-user-form">
			<h2>Editar Usuario</h2>
			<form
				onSubmit={submitForm}
			>
				<div>
					<label>Nombre:</label>
					<input
						type="text"
						name="nombre"
						value={editedData.nombre}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Correo:</label>
					<input
						type="text"
						name="correo"
						value={editedData.correo}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Rol:</label>
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
				<button type="submit">Guardar Cambios</button>
				<button type="button" onClick={onClose}>
					Cancelar
				</button>
			</form>
		</div>
	);
}

export { EditionForm };