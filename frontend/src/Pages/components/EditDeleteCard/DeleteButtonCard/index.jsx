import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { ButtonCard } from "../../ButtonCard";
import { AppContext } from "../../../../Context";

const DeleteButtonCard = ({item, onDelete, padding=10, border=true}) => {
    const context = React.useContext(AppContext)

    return(
        <ButtonCard
            title="Eliminar"
            onClick={() => context.setOpenConfirmationModal({
                status: true,
                title: "¿Esta seguro que desea eliminar esta información?",
                onConfirm: onDelete,
                onCancel: () => context.setOpenConfirmationModal({status:false}),
            })}
            padding={padding}
            borderWidth={border ? 1 : 0}
        >
            <RiDeleteBin6Line  />
        </ButtonCard>
    );
}

export { DeleteButtonCard };