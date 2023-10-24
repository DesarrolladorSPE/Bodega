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