import axios from 'axios';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { searchByCountry } from '../config';
import DetailsInfo from '../components/DetailsInfo';

const Button = styled.button`
	border: none;
	border-radius: var(--radius);
	background-color: var(--ui-base-color);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	width: 100px;
	box-shadow: var(--shadow);
	cursor: pointer;

	& svg {
		margin-right: 7px;
	}
`;

const Detailspage = () => {
	const [country, setCountry] = React.useState({});
	const params = useParams();

	React.useEffect(() => {
		axios.get(searchByCountry(params.name)).then(({ data }) => {
			setCountry(data[0]);
		});
	}, [params.name]);

	const navigate = useNavigate();
	return (
		<>
			{console.log('render')}
			<Button onClick={() => navigate(-1)}>
				<FaArrowLeft /> Back
			</Button>
			<DetailsInfo />
		</>
	);
};

export default Detailspage;
