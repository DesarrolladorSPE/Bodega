import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";

import "./styles.css";

const ConsolidadoCard = () => {
    const context = React.useContext(AppContext);


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
                    <p>FUentes:</p>
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
                        {context.consolidadoTotal?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.total}
                            </p>
                        ))}
                        <p></p>
                    </div>
                    <div>
                        {context.consolidadoTotal?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.total}
                            </p>
                        ))}
                        <p></p>
                    </div>
                    <div>
                        {context.consolidadoTotal?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.total}
                            </p>
                        ))}
                        <p></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export { ConsolidadoCard };