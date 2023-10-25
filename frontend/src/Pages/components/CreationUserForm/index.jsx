import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";

const CreationUserForm = ({ onClose, handleCreateUser }) => {
	const [newUserData, setNewUserData] = React.useState({
		nombre: "",
		correo: "",
		recuperar: "pl",
		clave: "",
		tipo: 0, // Puedes configurar el valor inicial según tus necesidades
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewUserData({ ...newUserData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleCreateUser(newUserData);
	};

	return (
		<div className="edit-user-form-container">
			<div className="edit-user-form">
				<Title
					color={"#FFF"}
					borderColor={"#FFF"}
				>
					Crear Usuario
				</Title>

				<form
					onSubmit={handleSubmit}
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
							value={newUserData.nombre}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="edit-user-input-container">
						<SubTitle
							textAlign="start"
						>
							Correo:
						</SubTitle>
						<input
							type="email"
							name="correo"
							value={newUserData.correo}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="edit-user-input-container">
						<SubTitle
							textAlign="start"
						>
							Contraseña:
						</SubTitle>
						<input
							type="password"
							name="clave"
							value={newUserData.clave}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="edit-user-input-container">
						<SubTitle
							textAlign="start"
						>
							Rol:
						</SubTitle>
						<select
							name="tipo"
							value={null}
							onChange={handleInputChange}
							required
						>
							<option selected value={0}>Usuario Básico</option>
							<option value={1}>Administrador</option>
						</select>
					</div>
					<div>
						<button
							type="submit"
							className="form-button save"
						>
							Crear Usuario
						</button>
						<button
							type="button"
							className="form-button cancel"
							onClick={onClose}
						>
							Cancelar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export { CreationUserForm };