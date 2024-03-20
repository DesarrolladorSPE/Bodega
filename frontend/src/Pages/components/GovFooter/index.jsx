import React from "react";

import { logoCoFooter, logoFooter } from "../../../assets";

import { BsFillTelephoneFill } from "react-icons/bs";

import { NavIcons } from "../NavIcons";
import { SubTitle, SubTitle2 } from "../SubTitle";
import "./styles.css";

import { AppContext } from "../../../Context";

const GovFooter = () => {
	const context = React.useContext(AppContext);

    const altTitleImg1 = "Visitar la Página del Gobierno en Colombia";
    const altTitleImg2 = "Visitar la Página de la marca de Colombia CO";

    return(
        <footer className="footer-container">
            <div className="footer-image-container">
                <a href="https://www.gov.co/" title={altTitleImg1}>
                    <img src={logoCoFooter} title={altTitleImg1} alt={altTitleImg1} />
                </a>
                <a href="https://www.colombia.co/" title={altTitleImg2}>
                    <img src={logoFooter} title={altTitleImg2} alt={altTitleImg2} />
                </a>
            </div>
            <div className="footer-info-container">
                <SubTitle2
                    color="#FFF"

                    textAlign={context.windowWidth < 870 ? "center" : "start"}
                >
                    Unidad Administrativa Especial del Servicio Público de Empleo
                </SubTitle2>
                <p>
                    
                    <br /> <br /> <br />
                    
                </p>
                <NavIcons/>
            </div>
            <div className="footer-contact-container">
                <div className="sub-title-container">
                    <BsFillTelephoneFill color="#FFF" />
                    <SubTitle2
                        textAlign={context.windowWidth < 870 ? "center" : "start"}
                    >
                        Contacto
                    </SubTitle2>
                </div>

                <p>
                    Atención al Ciudadano  <br/>
                    Dirección: Carrera 7, No. 31-10, Pisos 13 y 14, Bogotá D.C. <br/>
                    PBX: (+57) 601 7460999 Opción 1. <br/>
                    En Bogotá: 601 7460999 Opción 1.  <br/>
                    Horario de Atención: Lunes a Viernes de 8:00 a.m. a 4:00 p.m. en jornada continua. <br/>
                    <a href="/atencion-al-ciudadano/radique-su-pqrsd" title="Radicar Solicitud PQRSD">PQRSDF</a> | <a href="/atencion-al-ciudadano/contactenos" title="Localización física, canales, horarios y días de atención, correo institucional PQRSD">Escríbenos</a>  <br/>
                    Correspondencia: Lunes a Viernes de 8:00 a.m. a 4:00 p.m. en jornada continua. <br/>
                    Correo:&nbsp;atencionalciudadano@serviciodeempleo.gov.co&nbsp;<br/>
                    notificacionesjudiciales@serviciodeempleo.gov.co <br/>
                    <a href="/getmedia/cf6f1474-edb2-4594-9435-00c7f42748a4/Politica-de-Seguridad-y-Privacidad-de-la-Informacion-Final-Publicada.pdf.aspx" target="_blank" role="button" title="Clic para consultar el documento en PDF de la Política de seguridad de la información">Política de seguridad de la información</a> -
                    <a href="/mapa-sitio" target="_blank" role="button">Mapa del sitio</a>
                </p>

            </div>
        </footer>
    );
}

export { GovFooter };