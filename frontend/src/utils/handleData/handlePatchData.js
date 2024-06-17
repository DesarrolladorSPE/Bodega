import axios from "axios";
import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";

const handlePatchData = async (event, object, endpoint) => {
    event.preventDefault()

    axios.patch(`${api}${endpoint}`, object)
        .then(response => {
            const {data} = response;

            if(data.Status === "Success") {
                handleNotifications("success", data.message)
                reloadLocation();
            } else {
                handleNotifications("error", data.Error)
            }
        })
        .catch(err => {handleNotifications("error", err)})
}

export { handlePatchData };