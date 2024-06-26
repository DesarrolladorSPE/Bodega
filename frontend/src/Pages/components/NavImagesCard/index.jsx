import { banner, iconComplete } from "../../../assets";
import "./styles.css";

const NavImagesCard = () => {

    return(
        <div className="container-logo-header-govco">
            <div className="logo-header-govco" rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                <span>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                        <img src={iconComplete} alt="" />
                    </a>
                    {/* <Link to={"/home"}>
                        <img src={banner} alt="" />
                    </Link> */}
                </span>
            </div>
            {/* {context.name && <TextCard textAlign="end" width="auto">Bienvenido {context.name}</TextCard> } */}
        </div>
    );
}

export { NavImagesCard };