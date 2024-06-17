import { handleInputChange } from "./handleInputChange";
import { handleNotifications } from "./handleNotifications";

const handleFileChange = (event, extensions, setState) => {
    let files = [...event.target.files];

    if (!files) {
        return handleNotifications("error", "Por favor, seleccione un archivo");
    }

    files.map((item) => {
        const fileExtension = item.name.slice(((item.name.lastIndexOf(".") - 1) >>> 0) + 2);

        if (!extensions.includes(`.${fileExtension}`)) {
            files = null;
            handleInputChange("files", null, setState);
            event.target.value = null;
            return handleNotifications("error", `Por favor, seleccione un archivo .xlsx o .pdf válido. ${item.name}`)
        }
    })

    handleInputChange("files", event.target.files, setState);
};

export { handleFileChange };