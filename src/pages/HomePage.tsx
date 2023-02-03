import React, { useEffect, useState } from 'react';
import { AllCountriesResp } from '../models/models';
import List from '../components/List';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

type HomeProp = {
	data?: AllCountriesResp[];
}

const HomePage: React.FC<HomeProp> = ({ data }) => {
	const [filtredCountries, setFiltredCountries] = useState(data);
	const { region } = useAppSelector(state => state.country.sortCountr)
	const { search } = useAppSelector(state => state.country.serchCountr)

	useEffect(() => {
		const handleSearch = (search: string, region: string) => {
			let countries;
			if (data) {
				countries = [...data]
			}
			if (region) {
				countries = countries?.filter(c => c.region.includes(region))
			}
			if (search) {
				countries = countries?.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
			}
			setFiltredCountries(countries)
		}
		handleSearch(search, region)
	}, [data, region, search])



	return (
		<>
			<Controls />
			<List>
				{filtredCountries?.map((c) => {
					const countryInfo = {
						img: c.flags.png,
						name: c.name,
						info: [
							{
								title: 'Population',
								description: c.population.toLocaleString()
							},
							{
								title: 'Region',
								description: c.region
							},
							{
								title: 'Capital',
								description: c.capital
							},
						]
					};
					let activeStyle = {
						textDecoration: "none",
						color: "var(--colors-text)"
					};
					return <NavLink
						key={c.name}
						to={`/country/:${c.name}`}
						style={activeStyle}
					>{<Card key={c.name} {...countryInfo} />}</NavLink>;
				})}
			</List>
		</>
	);
};

export default HomePage;