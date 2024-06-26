import React from "react";
import axios from "axios"

import { scrollToValue } from "../../../utils/scrollToValue";
import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { handleNotifications } from "../../../utils/handleNotifications";

const AuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

	const handleUserRol = async (type) => {
		if (type == 1) {
			context.setAdmin(true);
			context.setIsLoged(true);
		} else if (type == 0) {
			context.setIsLoged(true);
			context.setAdmin(false);
		} else {
			context.setAdmin(false);
			context.setIsLoged(false)
		}
	}

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    React.useEffect(() => {
        scrollToValue();

        axios.get(`${context.apiUri}/user/`)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
					handleUserRol(data.type)
                    context.setName(data.name);
                }
				else {
                    handleUserRol(null)
                    navigate("/login");
                }
            })
            .catch(err => {
                context.setIsLoged(false);
                context.setAdmin(false);
                handleNotifications("error", err.message)
                navigate("/login");
            })
    }, []);

    return (
		<IsAuthWrapper>
			{children}
		</IsAuthWrapper>
    );
}

const IsAuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

    const { isLoged } = context || false;
    if (isLoged) {
        return (children);
    }

    return;
}
const IsAdminWrapper = ({children}) => {
    const context = React.useContext(AppContext);
	const navigate = useNavigate()

    const { admin } = context || false;

	React.useEffect(() => {
		if (!admin) {
			navigate("/home")
		}
	}, []);

	return(children)

}

export { AuthWrapper, IsAuthWrapper, IsAdminWrapper }