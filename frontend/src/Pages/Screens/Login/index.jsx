import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { AppContext } from "../../../Context";
import { InputCard } from "../../components/InputsCards";
import { handleInputChange } from "../../../utils/handleInputChange";
import { handleNotifications } from "../../../utils/handleNotifications";
import { ButtonCard } from "../../components/ButtonCard";
import { SubTitle } from "../../components/SubTitle";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { ScrollToWrapper } from "../../components/ScrollToWrapper";

import "./styles.css";


const Login = () => {
    const context = React.useContext(AppContext);

	const [values, setValues] = React.useState({
		email: null,
		password: null,
	})

	const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        context.setLoading(true);
        event.preventDefault();

        axios.post(`${context.apiUri}/user/login`, values)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    handleNotifications("success", data.message);
                    navigate("/home");
                } else {
                    handleNotifications("error", data.Error)
                }

                return;
            })
            .catch(err => { handleNotifications("error", err.message) })
            .finally(() => { context.setLoading(false); });
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

				<form onSubmit={handleSubmit} className="login-container shadow-style">
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