import React, { memo } from 'react';
import styled from 'styled-components';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

const Sort = styled.div`
position: relative;
background-color: var(--colors-ui-base);
color: var(--colors-text);
border-radius: var(--radii);
box-shadow: var(--shadow);
height: 50px;
display: flex;
align-items: center;
padding: 0.25rem;

`;

const SortLabel = styled.div`
display: flex;
align-items: center;
`;

const SortSpan = styled.span<{ name: string }>`
// eslint-disable-next-line
color: ${props => props.name == 'Filter by Region' ? 'gray' : 'var(--colors-text)'};
font-size: 14px;
cursor: pointer;
min-width: 140px;
padding-left: 10px;
`;

const SortPopup = styled.div`
width: 100%;
position: absolute;
right: 0;
align-items: center;
`;

const SortUl = styled.ul`
	list-style: none;
	padding: 0.25rem;
	margin-top: 260px;
	border-radius: var(--radii);
	background-color: var(--colors-ui-base);
`;

const SortLi = styled.li`
	padding: 0.40rem;
	cursor: pointer;
	color: var(--colors-text);
	border-radius: var(--radii);
	font-size: 14px;
	&:active,
   &:hover {
      background-color: var(--colors-bg);
   }
`;

type PopupClick = MouseEvent & {
	path: Node[];
};

type SortItem = {
	name: string;
	region: string;
};

export const sortList: SortItem[] = [
	{ name: 'Filter by Region', region: '' },
	{ name: 'Africa', region: 'Africa' },
	{ name: 'America', region: 'America' },
	{ name: 'Asia', region: 'Asia' },
	{ name: 'Europe', region: 'Europe' },
	{ name: 'Oceania', region: 'Oceania' },
];

const CustomSelect = () => {
	const sortRef = React.useRef<HTMLDivElement>(null);
	const [open, setOpen] = React.useState(false);
	const { sortedC } = useActions()
	const { name } = useAppSelector(state => state.country.sortCountr)

	const onClickListItem = (obj: SortItem) => {
		sortedC(obj);
		setOpen(false);
	};

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as PopupClick;

			if (sortRef.current && !_event.path.includes(sortRef.current)) {
				setOpen(false);
			}
		};

		document.body.addEventListener('click', handleClickOutside);

		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<Sort ref={sortRef} onClick={() => setOpen(!open)}>
			<SortLabel>
				<SortSpan name={name}> {name} </SortSpan>
			</SortLabel>
			{open && (
				<SortPopup>
					<SortUl>
						{sortList.map((obj, i) => (
							<SortLi
								key={i}
								onClick={() => onClickListItem(obj)}
							>
								{obj.name}
							</SortLi>
						))}
					</SortUl>
				</SortPopup>
			)}
		</Sort>
	);
};

export default memo(CustomSelect);