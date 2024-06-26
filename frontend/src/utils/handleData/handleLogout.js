import axios from "axios";
import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";

const handleLogout = async () => {
    await axios.get(`${api}/user/logout`)
        .then(res => {
            const { data } = res;

            if(data.Status == "Success") {
                handleNotifications("info", data.message);
                reloadLocation();
            } else {
                handleNotifications("error", data.Error);
			}
        })
        .catch(err => { handleNotifications("error", err.message) })
}

export { handleLogout };