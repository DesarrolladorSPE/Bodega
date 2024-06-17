import axios from "axios";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";
import { api } from "../api";

const handleDeleteData = async (item, endpoint) => {
    axios.delete(`${api}${endpoint}`, {
            data: { id: item.id }
        })
        .then(response => {
            const {data} = response;

            if(data.Status === "Success") {
                handleNotifications("success", data.message);
                reloadLocation()
            } else {
                handleNotifications("error", data.Error);
            }
        })
        .catch(err => {handleNotifications("error", err)})
}

export { handleDeleteData }