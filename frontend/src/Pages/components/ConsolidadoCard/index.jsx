import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";

import { AiOutlineClose } from "react-icons/ai";

import "./styles.css";

const ConsolidadoCard = () => {
    const context = React.useContext(AppContext);

    console.log(context.consolidadoTotal)

    return(
        <div className="consolidado-container">
			<div className="back-button-and-title-container">
				<Title
					color={"#FFF"}
					borderColor={"#FFF"}
				>
					Consolidado
				</Title>
				<button onClick={() => context.setShowConsolidado(false)}>
					<AiOutlineClose/>
				</button>
			</div>

            <div className="table-container">
                <div className="headers-container">
                    <p>Fuentes:</p>
                    <p>Total Personas Inscritas:</p>
                    <p>Total Personas Inscritas Jovenes:</p>
                    <p>Total Personas Inscritas PcD:</p>
                </div>
                <div className="all-info-container">
                    <div className="table-row-container">
                        {context.options?.map((item, index) => (
                            <p
                                key={index}
								className="row-title"
                            >
                                {item.nombre}:
                            </p>
                        ))}
                        <p className="row-title total">Total:</p>
                    </div>
                    <div className="table-row-container">
                        {context.consolidadoTotal[0]?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.total}
                            </p>
                        ))}
                        <p className="total">{context.consolidadoTotal[0]?.reduce((total, item) => total + item.total, 0)}</p>
                    </div>
                    <div className="table-row-container">
                        {context.consolidadoTotal[1]?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.totalJovenes}
                            </p>
                        ))}
                        <p className="total">{context.consolidadoTotal[1]?.reduce((total, item) => total + item.totalJovenes, 0)}</p>
                    </div>
                    <div className="table-row-container">
                        {context.consolidadoTotal[2]?.map((item, index) => (
                            <p
                                key={index}
                            >
                                {item.totalPcd}
                            </p>
                        ))}
                        <p className="total">{context.consolidadoTotal[2]?.reduce((total, item) => total + item.totalPcd, 0)}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export { ConsolidadoCard };