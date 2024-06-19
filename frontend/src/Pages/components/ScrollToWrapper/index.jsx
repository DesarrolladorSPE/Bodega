import React from "react"
import { scrollToValue } from "../../../utils/scrollToValue"

const ScrollToWrapper = ({children}) => {
	React.useEffect(() => {
		scrollToValue()
	}, [])

	return(children)
}

export { ScrollToWrapper };