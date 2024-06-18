import React from "react";
import { Title } from "../../components/Title";

import "./styles.css";
import { AppContext } from "../../../Context";
import { UserCard } from "../../components/UserCard";

import { Link } from "react-router-dom";

import { WrapperContainer2 } from "../../components/WrapperContainers";

import { BiArrowBack } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";


import { EditionForm } from "../../components/EditionForm";
import { MessageCard } from "../../components/MessageCard";
import { CreationUserForm } from "../../components/CreationUserForm";
import { handleNotifications } from "../../../utils/handleNotifications";
import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { ButtonCard } from "../../components/ButtonCard";
import { reloadLocation } from "../../../utils/realoadLocation";

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
				const updatedUsers = context.responseData.users.filter((user) => user.id !== userId);
				context.setUsers(updatedUsers);

				handleNotifications("success", data.message);
				reloadLocation();

			} else {
				handleNotifications("error", data.message);
			}
		}
		catch (err) {
			handleNotifications("error", err.message);
		}
		finally {
			context.setLoading(false);
		}
	};

	const handleCreateUser = async (newUserData) => {
		context.setLoading(true);
		try {
			const response = await fetch(`${context.apiUri}/users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUserData),
			});
			const data = await response.json();

			if (response.status === 201) {
				context.setUsers([...context.responseData.users, data.newUser]);
				handleNotifications("success", data.message);
				reloadLocation();

			} else {
				handleNotifications("error", data.message);
			}
		} catch (err) {
			handleNotifications("error", err.message);
		} finally {
			context.setLoading(false);
			context.setCreatingUser(false);
		}
	};

    return(
        <WrapperContainer2>
			<Title>Usuarios</Title>

			<AllInfoGridContainer className="grid-075-125">
				<WrapperContainer2 padding={0}>
					<ButtonCard title="Crear usuario" onClick={() => {
						context.resetUsersInfo();
						context.handleCloseEditForm();
						context.setCreatingUser(true)
					}}>
						Crear usuario
					</ButtonCard>

					{context.responseData?.users?.map((item, index) => (
						<UserCard
							key={index}
							item={item}
							handleEditClick={() => { handleEditClick(item) }}
							handleDeleteClick={() => handleDelelteClick(item.id)}
						/>

					))}
				</WrapperContainer2>

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
			</AllInfoGridContainer>
        </WrapperContainer2>
    );
}

export { Users };