import React from 'react';
import Search from './Search';
import CustomSelect from './CustomSelect';
import styled from 'styled-components';
import { FaLaptopHouse } from 'react-icons/fa';

const optios = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
	display: flex;
	flex-directoin: column;
	align-items: flex-start;

	@media (min-width: 767px) {
		flex-directoin: row;
		align-items: center;
		justify-content: space-between;
	}
`;

const Controls = (props) => {
	const [search, setSearch] = React.useState('');
	const [region, setRegion] = React.useState('');
	return (
		<Wrapper>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect
				options={optios}
				isClearable
				isSearchable={false}
				value={region}
				onChange={setRegion}
				placeholder={props.placeholder}
			/>
		</Wrapper>
	);
};

export default Controls;
