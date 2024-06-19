import React from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { AppContext } from "../../../Context";
import { InputCard } from "../../components/InputsCards";
import { handleInputChange } from "../../../utils/handleInputChange";
import { handleNotifications } from "../../../utils/handleNotifications";
import { ButtonCard } from "../../components/ButtonCard";
import { SubTitle } from "../../components/SubTitle";
import { handlePostData } from "../../../utils/handleData/handlePostData";
import { WrapperContainer2 } from "../../components/WrapperContainers";

import "./styles.css";
import { ScrollToWrapper } from "../../components/ScrollToWrapper";

const Login = () => {
    const context = React.useContext(AppContext);

	const [values, setValues] = React.useState({
		email: null,
		password: null,
	})

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        try {
			event.preventDefault();
			context.setLoading(true);

			const data = await handlePostData(event, values, "/login", null);
			console.log(data)

			if (data?.type != (undefined || null)) {
				handleUserRol(data?.type);

				navigate("/home");
				context.setIsLoged(true);
			}
        }
        catch (err) {
			handleNotifications("error", err.message);
        } finally {
			context.setLoading(false);
		}
    };

	const handleUserRol = async (type) => {
		if (type == 1) {
			context.setAdmin(true)
		} else if (type == 0) {
			context.setAdmin(false);
		} else {
			context.setAdmin(false);
			context.setIsLoged(false)
			handleNotifications("error", "Usuario Invalido");
		}
	}

    return(
		<ScrollToWrapper>

			<WrapperContainer2 padding={0}>
				<Title
					color="#FFF"
					borderColor="#FFF"
				>
					Bienvenido a  la Bodega de Archivos del SPE
				</Title>

				<form onSubmit={handleLogin} className="login-container shadow-style">
					<SubTitle>Iniciar Sesión</SubTitle>

					<InputCard
						type="email"
						id={"email"}
						label={"Correo:"}
						placeholder="Ingrese su correo"
						onChange={(event) => handleInputChange("email", event, setValues)}
						defaultValue={values?.email}
					/>
					<InputCard
						type="password"
						id={"password"}
						label={"Contraseña:"}
						placeholder="Ingrese su contraseña"
						onChange={(event) => handleInputChange("password", event, setValues)}
						defaultValue={values?.password}
					/>

					<ButtonCard type="submit" title="Iniciar Sesión">
						Iniciar sesion
					</ButtonCard>

				</form>
			</WrapperContainer2>
		</ScrollToWrapper>
    );
}

export { Login }