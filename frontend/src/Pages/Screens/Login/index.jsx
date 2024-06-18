import React from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import "./styles.css";
import { AppContext } from "../../../Context";
import { MessageCard } from "../../components/MessageCard";
import { InputCard } from "../../components/InputsCards";
import { handleInputChange } from "../../../utils/handleInputChange";
import { handleNotifications } from "../../../utils/handleNotifications";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { ButtonCard } from "../../components/ButtonCard";
import { SubTitle } from "../../components/SubTitle";

const Login = () => {
    const context = React.useContext(AppContext);

	const [values, setValues] = React.useState({
		email: null,
		password: null,
	})

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
		context.setLoading(true);
        try {
            const response = await fetch( `${context.apiUri}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await response.json();

            if(response.status === 200) {
				handleNotifications("success", data.message);
				handleUserRol(data.type);

				navigate("/home");
				context.setIsLoged(true);

            } else {
				handleNotifications("error", data.message);
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
			context.errorMessageHandler("error", "Usuario invalido")
		}
	}

    return(
		<>
			<Title
				color="#FFF"
				borderColor="#FFF"
			>
				Bienvenido a  la Bodega de Archivos del SPE
			</Title>
			<div className="login-container shadow-style">
				<SubTitle>Iniciar Sesión</SubTitle>


				<form className="login-form-container" onSubmit={handleLogin}>
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
			</div>
		</>
    );
}

export { Login }