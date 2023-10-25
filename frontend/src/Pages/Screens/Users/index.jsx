import React from "react";
import { Title } from "../../components/Title";

import "./styles.css";
import { AppContext } from "../../../Context";
import { UserCard } from "../../components/UserCard";

import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { EditionForm } from "../../components/EditionForm";

import { MessageCard } from "../../components/MessageCard";

const Users = () => {
    const context = React.useContext(AppContext);

	const handleEditClick = (user) => {
		context.setEditingUser(user);
	};

	const handleDelelteClick = async (userId) => {
		context.setLoading(true);
		try {
			// Realiza una solicitud al servidor para eliminar el usuario
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
                <div className="users-grid-container">
                    {
                        context.users?.map((item) => (
                            <>
                                <UserCard
                                    key={item.id}
                                    data={item}
									handleEditClick={() => handleEditClick(item)}
									handleDeleteClick={() => handleDelelteClick(item.id)}
                                />
                            </>
                        ))
                    }
                </div>
				<div>
					<MessageCard/>
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