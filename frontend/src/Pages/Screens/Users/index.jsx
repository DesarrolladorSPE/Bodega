import React from "react";
import { Title } from "../../components/Title";

import "./styles.css";
import { AppContext } from "../../../Context";
import { UserCard } from "../../components/UserCard";

const Users = () => {
    const context = React.useContext(AppContext);
    
    return(
        <div className="users-container">
            <Title
                color={"#FFF"}
                borderColor={"#FFF"}
            >
                Usuarios
            </Title>
            <div className="users-main-container">
                <div className="users-grid-container">
                    {
                        context.users?.map((item) => (
                            <>
                                <UserCard
                                    key={item.id}
                                    data={item}
                                />
                            </>
                        ))
                    }
                </div>
                <div></div>
            </div>
        </div>
    );
}

export { Users };