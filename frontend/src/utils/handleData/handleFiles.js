import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";

const handleGetFile = async (endpoint) => {
    try {
        const response = await fetch(`${api}/${endpoint}`, {
            method: "GET"
        });

        if (!(response.status == 200)) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        }

        return await response.blob();
    } 
    catch (err) {
        throw new Error(err)
    }
}

const handleDeleteFile = async (endpoint) => {
    try {
        const response = await fetch(`${api}/file/${endpoint}`, {
            method: "DELETE"
        });
        const data = await response.json();

        if(data.Status === "Success") {
            handleNotifications("success", data.message);
            reloadLocation();

            return data.Status;
        } else {
            handleNotifications("error", data.Error)
        }

    } 
    catch (err) {
        handleNotifications('error', err);

    }
}

export { handleGetFile, handleDeleteFile };