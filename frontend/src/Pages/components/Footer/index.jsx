import { BsFillTelephoneFill } from "react-icons/bs";

import { SecondarySubTitle } from "../SecondarySubTitle";

import { logoFooter, logoCoFooter } from "../../../assets";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { footerLinks, footerLinksInfo } from "../../../utils/footerLinks";

import "./styles.css";


const Footer = () => {

    const altTitleImg1 = "Visitar la Página del Gobierno en Colombia";
    const altTitleImg2 = "Visitar la Página de la marca de Colombia CO";

    return(
        <footer className="footer-container">
            <div className="footer-image-container">
                <a href="https://www.gov.co/" title={altTitleImg1}>
                    <img src={logoFooter} title={altTitleImg1} alt={altTitleImg1} />
                </a>
                <a href="https://www.colombia.co/" title={altTitleImg2}>
                    <img src={logoCoFooter} title={altTitleImg2} alt={altTitleImg2} />
                </a>
            </div>

            <div className="footer-info-container">
                <SecondarySubTitle
                    color="#FFF"

                    textAlign={"start"}
                >
                    Unidad Administrativa Especial del Servicio Público de Empleo
                </SecondarySubTitle>

                <p>
                    Dirección: Carrera 7, No. 31-10, Pisos 13 y 14, Bogotá D.C.
                    <br />
                    Horario de Atención: Lunes a Viernes de 8:00 a.m. a 4:00 p.m. en jornada continua
                </p>

                <AllInfoGridContainer className="grid-1-1">
                    {footerLinks?.map((item, index) => (
                        <a className="footer-link-card" key={index} href={item?.link} title={item?.name} target="_blank" rel="noopener noreferrer">
                            {item?.icon} {item?.name}
                        </a>
                    ))}
                </AllInfoGridContainer>

            </div>
            <div className="footer-contact-container">
                <div className="sub-title-container">
                    <BsFillTelephoneFill color="#FFF" />
                    <SecondarySubTitle
                        textAlign={"start"}
                    >
                        Contacto
                    </SecondarySubTitle>
                </div>

                <p className="footer-text">
                    Teléfono conmutador: +57(601) 746 09 99 Opción 1. <br />
                    Correspondencia: Lunes a Viernes de 8:00 a.m. a 4:00 p.m. en jornada continua. <br />
                    Correo: atencionalciudadano@serviciodeempleo.gov.co <br />
                    notificacionesjudiciales@serviciodeempleo.gov.co <br />
                </p>

                <div>
                    {footerLinksInfo.map((item, index) => (
                        <a className="footer-link-card footer-link-info-card" key={index} href={item?.link} title={item?.name} target="_blank" rel="noopener noreferrer">
                            {item?.name}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}

export { Footer };