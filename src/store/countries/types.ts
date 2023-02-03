export interface CountriesState {
	serchCountr: {
		search: string
	},
	sortCountr: {
		name: string,
		region: string,
	}
}

export interface Sort {
	name: string,
	region: string,
}