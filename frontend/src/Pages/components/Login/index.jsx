import { Title } from "../Title";
import "./styles.css";

const Login = () => {
    return(
        <div className="login-container">
            <Title
                color="#FFF"
                borderColor="#FFF"
            >
                Iniciar Sesión
            </Title>

            <form action="post" className="login-form-container">
                <div className="form-input-container">
                    <label htmlFor="login-email">Correo:</label>
                    <input type="email" name="login-email" placeholder="Correo"/>
                </div>
                <div className="form-input-container">
                    <label htmlFor="login-password">Contraseña:</label>
                    <input type="password" name="login-password" placeholder="Contraseña"/>
                </div>
                <button>Iniciar sesion</button>
            </form>
        </div>
    );
}

export { Login }