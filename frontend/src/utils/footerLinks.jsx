import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const footerLinks = [
    {
        name: "@ServiciodEmpleo",
        icon: <FaXTwitter/>,
        link: "https://twitter.com/ServiciodEmpleo"
    },
    {
        name: "@servicioempleocol",
        icon: <FaInstagram/>,
        link: "https://www.instagram.com/servicioempleocol/"
    },
    {
        name: "@SPEColombia",
        icon: <FaFacebook/>,
        link: "https://www.facebook.com/SPEColombia"
    },
    {
        name: "@ServiciodEmpleo",
        icon: <FaYoutube/>,
        link: "https://www.youtube.com/user/ServiciodEmpleo"
    },
    {
        name: "Servicio Público de Empleo (SPE)",
        icon: <IoLogoLinkedin/>,
        link: "https://www.linkedin.com/in/servicio-p%C3%BAblico-de-empleo-spe-6446892a9/"
    },
]

const footerLinksInfo = [
    {
        name: "Política de seguridad de la información",
        link: "https://www.serviciodeempleo.gov.co/getmedia/cf6f1474-edb2-4594-9435-00c7f42748a4/Politica-de-Seguridad-y-Privacidad-de-la-Informacion-Final-Publicada.pdf.aspx"
    },
    {
        name: "Política de protección de datos",
        link: "https://www.serviciodeempleo.gov.co/getattachment/Transparencia-e-Informacion/Planeacion/Politicas-lineamientos-y-manuales/Politicas-lineamientos-y-manuales/Politica-de-proteccion-de-datos-personales/DE-P-02-Politica-Proteccion-de-Datos-2022-Final.pdf.aspx?lang=es-CO"
    },
    {
        name: "Mapa del sitio",
        link: "https://www.serviciodeempleo.gov.co/mapa-sitio"
    },
    {
        name: "PQRSDF",
        link: "https://www.serviciodeempleo.gov.co/atencion-al-ciudadano/radique-su-pqrsd"
    },
    {
        name: "Escríbenos",
        link: "https://www.serviciodeempleo.gov.co/atencion-al-ciudadano/contactenos"
    },
]


export { footerLinks, footerLinksInfo };