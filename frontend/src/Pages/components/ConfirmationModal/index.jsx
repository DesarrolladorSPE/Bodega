import React from "react";
import { AppContext } from "../../../Context";
import { SubTitle } from "../SubTitle";

import { ButtonCard } from "../ButtonCard";

import "./styles.css";

const ConfirmationModal = () => {
    const context = React.useContext(AppContext)

    const {status, title, onConfirm, onCancel} = context.openConfirmationModal;

    if(status) {
        return(
            <div className="modal-container">
                <div className="modal-buttons-container">
                    <SubTitle textAlign="center">{title}</SubTitle>

                    <div className="info-container">
                        <p>Esta acción no podrá revertirse</p>
                    </div>

                    <div className="flex-row">
                        <ButtonCard
                            title="Confirmar"
                            type="submit"
                            onClick={onConfirm}
                        >
                            Confirmar
                        </ButtonCard>

                        <ButtonCard
                            title="Cancelar"
                            onClick={onCancel}
                        >
                            Cancelar
                        </ButtonCard>
                    </div>
                </div>
            </div>
        );
    }


}

export { ConfirmationModal };