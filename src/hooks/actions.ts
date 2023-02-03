import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { countriesActions } from "../store/countries/countries.slice"

const actions = {
	...countriesActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}