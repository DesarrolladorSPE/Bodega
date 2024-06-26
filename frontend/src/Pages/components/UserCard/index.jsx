import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { SpanCard, TextCard } from "../TextComponents";
import { EditDeleteCard } from "../EditDeleteCard";

import "./styles.css";
import { DeleteButtonCard } from "../EditDeleteCard/DeleteButtonCard";

const UserCard = ({item={}, handleEditClick, handleDeleteClick}) => {
	const userType = {
		1: "Administrador",
		0: "Usuario Básico",
	}

    return(

		<WrapperContainer1 padding={10}>
			<AllInfoGridContainer className="grid-175-025" gap={10}>
				<WrapperContainer2 flexDirection="column" justifyContent="center" padding={20}>
					<TextCard><SpanCard>Nombre: </SpanCard> {item?.nombre}</TextCard>
					<TextCard><SpanCard>Correo: </SpanCard> {item?.correo}</TextCard>
					<TextCard><SpanCard>Tipo de Usuario: </SpanCard> {userType[item?.tipo]}</TextCard>
				</WrapperContainer2>

				<WrapperContainer2 alignItems="center" justifyContent="center" padding={10}>
					<DeleteButtonCard item={item} onDelete={handleDeleteClick} padding={10}/>
				</WrapperContainer2>
			</AllInfoGridContainer>
		</WrapperContainer1>

    );
}

export { UserCard };