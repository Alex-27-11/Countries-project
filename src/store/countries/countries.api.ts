import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AllCountriesResp, SearchCounryResp } from '../../models/models'

export const countriesApi = createApi({
	reducerPath: 'countries/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://restcountries.com/v2/'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		serchCountries: build.query<SearchCounryResp[], string>({
			query: (search: string) => ({
				url: `name/${search}`,
				// params: {
				// 	q: search,
				// 	// per_page: 10,
				// }
			}),
			// transformResponse: (response: ServerResponse<IUser>) => response.items
		}),
		allCountries: build.query<AllCountriesResp[], string>({
			query: (search: string) => 'all?fields=name,capital,flags,population,region'
		}),
		sortCountries: build.query<SearchCounryResp[], string[]>({
			query: (code: string[]) => ({
				url: `alpha?codes=` + code.join(','),
			})
		})
	})
})

export const { useSerchCountriesQuery, useAllCountriesQuery, useSortCountriesQuery } = countriesApi