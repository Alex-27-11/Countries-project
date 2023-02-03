import React from 'react';
import CustomSelect from './CustomSelect';
import Search from './Search';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media(min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const Controls: React.FC = () => {


	return (
		<Wrapper>
			<Search />
			<CustomSelect />
		</Wrapper>
	);
};

export default Controls;