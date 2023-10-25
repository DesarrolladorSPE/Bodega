import React from "react";
import { Title } from "../../components/Title";

import "./styles.css";
import { AppContext } from "../../../Context";
import { UserCard } from "../../components/UserCard";

import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";


import { EditionForm } from "../../components/EditionForm";
import { MessageCard } from "../../components/MessageCard";
import { CreationUserForm } from "../../components/CreationUserForm";

const Users = () => {
    const context = React.useContext(AppContext);

	const handleEditClick = (user) => {
		if(context.editingUser) {
			context.handleCloseEditForm();
		} else {
			context.resetUsersInfo();
			context.handleCloseCreateForm();
			context.setEditingUser(user);
		}
	};

	const handleDelelteClick = async (userId) => {
		context.setLoading(true);
		try {
			const response = await fetch(`${context.apiUri}/users/${userId}`, {
				method: 'DELETE',
			});
			const data = await response.json();

			if (response.status === 200) {
				const updatedUsers = context.users.filter((user) => user.id !== userId);
				context.setUsers(updatedUsers);
				context.messageHandler("all-ok", data.message);

			} else {
				context.messageHandler("error", data.message);
			}
		} catch (err) {
			console.error('Error en la solicitud de eliminación:', err);
		} finally {
			context.setLoading(false);
		}
	};

	const handleCreateUser = async (newUserData) => {
		context.setLoading(true);
		try {
			// Realiza una solicitud al servidor para crear un nuevo usuario
			const response = await fetch(`${context.apiUri}/users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUserData),
			});
			const data = await response.json();

			if (response.status === 201) {
				context.setUsers([...context.users, data.newUser]);
				context.messageHandler("all-ok", data.message);
			} else {
				context.messageHandler("error", data.message);
			}
		} catch (err) {
			context.messageHandler("error", err.message);
		} finally {
			context.setLoading(false);
			context.setCreatingUser(false);
		}
	};

    return(
        <div className="users-container">
			<div className="back-button-and-title-container">
				<Link to={"/home"}>
					<BiArrowBack/>
				</Link>
				<Title
					color={"#FFF"}
					borderColor={"#FFF"}
				>
					Usuarios
				</Title>
			</div>

            <div className="users-main-container">
				<div>
					<button
						className="add-user-button"
						onClick={() => {
							context.resetUsersInfo();
							context.handleCloseEditForm();
							context.setCreatingUser(true)
						}}
					>
						<FiPlus/>
						Crear Usuario
					</button>

					<div className="users-grid-container">
						{
							context.users?.map((item) => (
								<>
									<UserCard
										key={item.id}
										data={item}
										handleEditClick={() => {handleEditClick(item)}}
										handleDeleteClick={() => handleDelelteClick(item.id)}
									/>
								</>
							))
						}
					</div>
				</div>

				<div>
					<MessageCard/>
					{context.creatingUser &&
						<CreationUserForm
							onClose={context.handleCloseCreateForm}
							handleCreateUser={handleCreateUser}
						/>
					}
					{context.editingUser &&
						<EditionForm
							user={context.editingUser}
							onClose={context.handleCloseEditForm}
						/>
					}
				</div>

            </div>
        </div>
    );
}

export { Users };