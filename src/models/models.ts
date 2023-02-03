export interface SerFlags {
	svg: string;
	png: string;
}

export interface SerCurrency {
	code: string;
	name: string;
	symbol: string;
}

export interface SerLanguage {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}

export interface SerTranslations {
	br: string;
	pt: string;
	nl: string;
	hr: string;
	fa: string;
	de: string;
	es: string;
	fr: string;
	ja: string;
	it: string;
	hu: string;
}

export interface SerRegionalBloc {
	acronym: string;
	name: string;
	otherNames: string[];
}

export interface SearchCounryResp {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	subregion: string;
	region: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number;
	gini: number;
	timezones: string[];
	borders?: string[];
	nativeName: string;
	numericCode: string;
	flags: SerFlags;
	currencies: SerCurrency[];
	languages: SerLanguage[];
	translations: SerTranslations;
	flag: string;
	regionalBlocs: SerRegionalBloc[];
	cioc: string;
	independent: boolean;
}

//=========================================================================

export interface AllFlags {
	svg: string;
	png: string;
}

export interface AllCurrency {
	code: string;
	name: string;
	symbol: string;
}

export interface AllLanguage {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}

export interface AllTranslations {
	br: string;
	pt: string;
	nl: string;
	hr: string;
	fa: string;
	de: string;
	es: string;
	fr: string;
	ja: string;
	it: string;
	hu: string;
}

export interface AllRegionalBloc {
	acronym: string;
	name: string;
	otherNames: string[];
	otherAcronyms: string[];
}

export interface AllCountriesResp {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	subregion: string;
	region: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string;
	flags: AllFlags;
	currencies: AllCurrency[];
	languages: AllLanguage[];
	translations: AllTranslations;
	flag: string;
	regionalBlocs: AllRegionalBloc[];
	cioc: string;
	independent: boolean;
	gini?: number;
}


