import React from "react";

import { AppContext } from "../../../Context";
import { Title } from "../../components/Title";
import { UploadFile } from "../../components/UploadFile";

import "./styles.css";
import { RowAffectedCard } from "../../components/RowAffectedCard";

import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { WrapperContainer2 } from "../../components/WrapperContainers";

const Home = () => {
	const context = React.useContext(AppContext)

    return(
		<WrapperContainer2>
			<Title>{context.admin ? "Bienvenido Administrador" : "Bienvenido"}</Title>

			<AllInfoGridContainer className="grid-075-125">
				<UploadFile/>
				<RowAffectedCard/>

			</AllInfoGridContainer>

		</WrapperContainer2>
    );
}
export { Home };