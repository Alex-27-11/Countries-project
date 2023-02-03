import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CountriesState, Sort } from "./types"

const initialState: CountriesState = {
	serchCountr: {
		search: ''
	},
	sortCountr: {
		name: 'Filter by Region',
		region: '',
	}
}

export const countrySlice = createSlice({
	name: 'coutry',
	initialState,
	reducers: {
		serchedC(state, action: PayloadAction<string>) {
			state.serchCountr.search = action.payload
		},
		sortedC(state, action: PayloadAction<Sort>) {
			state.sortCountr = action.payload
		},
	}
})

export const countriesActions = countrySlice.actions
export const countriesReducer = countrySlice.reducer