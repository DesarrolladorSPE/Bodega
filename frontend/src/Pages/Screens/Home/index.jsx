import React from "react";

import { AppContext } from "../../../Context";
import { Title } from "../../components/Title";
import { UploadFile } from "../../components/UploadFile";

import "./styles.css";
import { RowAffectedCard } from "../../components/RowAffectedCard";

import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { AuthWrapper } from "../../components/AuthWrapper";

const Home = () => {
	const context = React.useContext(AppContext)

    return(
		<AuthWrapper>
			<WrapperContainer2>
				<Title>Bienvenido {context.name}</Title>

				<AllInfoGridContainer className="grid-075-125">
					<UploadFile/>
					<RowAffectedCard/>

				</AllInfoGridContainer>

			</WrapperContainer2>
		</AuthWrapper>

    );
}
export { Home };