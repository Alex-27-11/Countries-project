import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import { useDebounce } from "../hooks/debounce";
import { useActions } from "../hooks/actions";

const InputContainer = styled.label`
background-color: var(--colors-ui-base);
padding: 1rem 2rem;
display: flex;
align-items: center;

border-radius: var(--radii);
box-shadow: var(--shadow);
width: 100%;
margin-bottom: 1rem;

@media (min-width: 767px) {
	margin-bottom: 0;
	width: 280px;
}
`;

const Input = styled.input`
margin-left: 2rem;
border: none;
outline: none;
color: var(--color-text);
background-color: var(--colors-ui-base);
`;


const Search: React.FC = () => {
	const [search, setSearch] = useState('')
	const debounced = useDebounce(search)
	const { serchedC } = useActions()
	useEffect(() => {
		serchedC(debounced)
	}, [debounced, serchedC])

	return (
		<>
			<InputContainer>
				<IoSearch />
				<Input
					type='search'
					placeholder='Search for a country...'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
					value={search} />
			</InputContainer>
		</>

	);
};

export default Search;	