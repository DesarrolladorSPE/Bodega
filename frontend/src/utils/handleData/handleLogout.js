import axios from "axios";
import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";

const handleLogout = () => {
    axios.get(`${api}/user/logout`)
        .then(res => {
            const { data } = res;

            if(data.Status == "Success") {
                handleNotifications("info", "Sesión Cerrada Correctamente")
                reloadLocation()
            }
        })
        .catch(err => { handleNotifications("error", err) })
}

export { handleLogout };