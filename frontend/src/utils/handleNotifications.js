import { toast } from "react-toastify";

const handleNotifications = (type="info", value=null) => {
    const position = 'bottom-right';

    const notiType = {
        "info" :  () => toast.info(value || "Info", {position: position}),
        "error" : () => toast.error(value || "Error", {position: position}),
        "success" : () => toast.success(value || "Completado Exitosamente", {position: position}),
    }
    return notiType[type]();
}

export { handleNotifications };