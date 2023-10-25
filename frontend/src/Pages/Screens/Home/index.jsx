import React from "react";
import { AppContext } from "../../../Context";
import { MessageCard } from "../../components/MessageCard";
import { Title } from "../../components/Title";
import { UploadFile } from "../../components/UploadFile";

import "./styles.css";
import { RowAffectedCard } from "../../components/RowAffectedCard";

const Home = () => {
	const context = React.useContext(AppContext)

    return(
		<div className="home-container">
			<Title
				color={"#FFF"}
				borderColor={"#FFF"}
			>
				{context.admin ? "Bienvenido Administrador" : "Bienvenido"}
			</Title>


			<div className="upload-and-info-container">
				<UploadFile/>
				<div className="info-cards-container">
					<MessageCard/>
					<RowAffectedCard/>
				</div>
			</div>

		</div>
    );
}
export { Home };