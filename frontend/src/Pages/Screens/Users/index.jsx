import React from "react";
import { Title } from "../../components/Title";

import { AppContext } from "../../../Context";
import { UserCard } from "../../components/UserCard";

import { WrapperContainer2 } from "../../components/WrapperContainers";

import { EditionForm } from "../../components/EditionForm";
import { CreationUserForm } from "../../components/CreationUserForm";
import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { ButtonCard } from "../../components/ButtonCard";
import { handleDeleteData } from "../../../utils/handleData/handleDeleteData";

import "./styles.css";
import { ScrollToWrapper } from "../../components/ScrollToWrapper";

const Users = () => {
    const context = React.useContext(AppContext);

	const handleEditClick = (user) => {
		if(context.editingUser) {
			context.handleCloseEditForm();
			return;
		}

		context.resetUsersInfo();
		context.handleCloseCreateForm();
		context.setEditingUser(user);
	};

	const handleDelelteClick = async (item) => {
		context.setLoading(true);

		await handleDeleteData(item, "/users")
		context.setLoading(false);
	};

    return(
		<ScrollToWrapper>
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
								handleDeleteClick={() => { handleDelelteClick(item) }}
							/>

						))}
					</WrapperContainer2>

					{context.creatingUser &&
						<CreationUserForm
							onClose={context.handleCloseCreateForm}
						/>
					}
					{context.editingUser &&
						<EditionForm
							user={context.editingUser}
							onClose={context.handleCloseEditForm}
						/>
					}

				</AllInfoGridContainer>
			</WrapperContainer2>
		</ScrollToWrapper>

    );
}

export { Users };