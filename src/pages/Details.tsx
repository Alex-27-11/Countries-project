import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useSerchCountriesQuery } from '../store/countries/countries.api';
import { Button } from '../components/Button';
import Info from '../components/Info';

const Details: React.FC = () => {
	const { name } = useParams();
	const name1 = name?.slice(1);
	const navigate = useNavigate();
	const { data } = useSerchCountriesQuery(`${name1}`);

	const back = () => navigate(-1);

	return (
		<div>
			<Button onClick={back}><IoArrowBack /> Back</Button>
			{data && <Info {...data[0]} />}
		</div>
	);
};

export default Details;