import { banner, iconComplete } from "../../../assets";
import "./styles.css";

const GovNavbar = () => {
    return(
        <>
            <nav className="barra-superior-govco" aria-label="Barra superior">
                <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"  aria-label="Portal del Estado Colombiano - GOV.CO"></a>
            </nav>
            
            <div className="container-logo-header-govco">
                <a className="logo-header-govco" rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                    <span className="">
                        <img src={iconComplete} alt="" />
                        {/* <img src={banner} alt="" /> */}
                    </span>
                </a>
            </div>
            
        </>

    );
}

export { GovNavbar }