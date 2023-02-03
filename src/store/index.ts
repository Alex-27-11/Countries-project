import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { countriesApi } from "./countries/countries.api";
import { countriesReducer } from "./countries/countries.slice";

export const store = configureStore({
	reducer: {
		[countriesApi.reducerPath]: countriesApi.reducer,
		country: countriesReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countriesApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>