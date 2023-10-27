import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";

import "./styles.css";

const ConsolidadoCard = () => {
    const context = React.useContext(AppContext);

    console.log(context.consolidadoTotal)

    return(
        <div className="consolidado-container">
            <Title
                color={"#000"}
                borderColor={"#000"}
            >
                Consolidado
            </Title>

            <div className="table-container">
                <div className="headers-container">
                    <p>Fuentes:</p>
                    <p>Total Personas Inscritas:</p>
                    <p>Total Personas Inscritas Jovenes:</p>
                    <p>Total Personas Inscritas PcD:</p>
                </div>
                <div className="all-info-container">
                    <div>
                        {context.options?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.nombre}
                            </p>
                        ))}
                        <p>Total:</p>
                    </div>
                    <div>
                        {context.consolidadoTotal[0]?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.total}
                            </p>
                        ))}
                        <p>{context.consolidadoTotal[0]?.reduce((total, item) => total + item.total, 0)}</p>
                    </div>
                    <div>
                        {context.consolidadoTotal[1]?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.totalJovenes}
                            </p>
                        ))}
                        <p>{context.consolidadoTotal[1]?.reduce((total, item) => total + item.totalJovenes, 0)}</p>
                    </div>
                    <div>
                        {context.consolidadoTotal[2]?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.totalPcd}
                            </p>
                        ))}
                        <p>{context.consolidadoTotal[2]?.reduce((total, item) => total + item.totalPcd, 0)}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export { ConsolidadoCard };