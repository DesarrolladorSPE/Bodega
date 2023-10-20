import React from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import "./styles.css";
import { AppContext } from "../../../Context";

const Login = () => {
    const context = React.useContext(AppContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch( `${context.apiUri}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, 
                    password 
                }),
            });
            const data = await response.json();
            alert(data.message)
            if(response.status === 200) {
                context.setIsLoged(true);
                navigate("/home");
            }
        } 
        catch (error) {
            console.error(error);
        }
    };


    return(
        <div className="login-container">
            <Title
                color="#FFF"
                borderColor="#FFF"
            >
                Iniciar Sesión
            </Title>

            <form className="login-form-container" onSubmit={handleLogin}>
                <div className="form-input-container">
                    <label htmlFor="login-email">Correo:</label>
                    <input 
                        type="email" 
                        name="login-email" 
                        placeholder="Correo"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                </div>
                <div className="form-input-container">
                    <label htmlFor="login-password">Contraseña:</label>
                    <input 
                        type="password" 
                        name="login-password" 
                        placeholder="Contraseña"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                </div>
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    );
}

export { Login }