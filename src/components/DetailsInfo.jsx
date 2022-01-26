import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { searchByCode } from '../config';
import axios from 'axios';

const Wrapper = styled.section`
	margin-top: 3rem;
	width: 100%;
	display: grid;
	grid-template-columns: 100%;
	gap: 2rem;
	@media (min-width: 767px) {
		grid-template-columns: minmax(100px, 400px) 1fr;
		align-items: center;
		gap: 5rem;
	}
	@media (min-width: 1024px) {
		grid-template-columns: minmax(400px, 600px) 1fr;
	}
`;

const InfoImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const InfoTitle = styled.h1`
	margin: 0;
	font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 4rem;
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const ListItem = styled.li`
	line-height: 1.8;
	& > b {
		font-weight: var(--fw-normal);
	}
`;

const Meta = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
	align-items: flex-start;
	& > b {
		font-weight: var(--fw-normal);
	}
	@media (min-width: 767px) {
		flex-direction: row;
		align-items: center;
	}
`;

const TagGroup = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
`;

const Tag = styled.span`
	padding: 0 1rem;
	background-color: var(--ui-base-color);
	box-shadow: var(--shadow);
	line-height: 1.5;
	cursor: pointer;
`;

const DetailsInfo = (props) => {
	const [borderCountries, setBorderCountries] = React.useState([]);
	const navigate = useNavigate();
	let currencySymbol;
	let currency;
	let cangList = '';

	if (props.currencies) {
		currency = Object.keys(props.currencies);
	}

	for (let key in props.currencies) {
		currencySymbol = props.currencies[key].symbol;
	}

	const {
		name,
		flags,
		capital,
		population,
		region,
		subregion,
		tld,
		languages = {},
		borders = [],
	} = props;

	for (let key in languages) {
		cangList += languages[key] + ' ';
	}

	React.useEffect(() => {
		if (borders.length) {
			const lowerBorders = borders.map((el) => el.toLowerCase());
			axios.get(searchByCode(lowerBorders)).then(({ data }) => {
				setBorderCountries(data);
			});
		}
	}, [borders]);

	return (
		<Wrapper>
			<InfoImage src={flags.svg} alt={name.official} />

			<div>
				<InfoTitle>{name.official}</InfoTitle>
				<ListGroup>
					<List>
						<ListItem>
							<strong>Native Name: </strong> {name.common}
						</ListItem>
						<ListItem>
							<strong>Population: </strong>
							{population.toLocaleString()}
						</ListItem>
						<ListItem>
							<strong>Region:</strong> {region}
						</ListItem>
						<ListItem>
							<strong>Sub Region: </strong> {subregion}
						</ListItem>
						<ListItem>
							{capital && <strong>Capital: </strong>} {capital}
						</ListItem>
					</List>
					<List>
						<ListItem>
							<strong>Top Level Domain: </strong> {tld}
						</ListItem>
						<ListItem>
							<strong>Currency: </strong>
							{currency}
						</ListItem>
						<ListItem>
							<strong>Symbol: </strong>
							{currencySymbol}
						</ListItem>
						<ListItem>
							<strong>Languages: </strong>
							{cangList}
						</ListItem>
					</List>
				</ListGroup>
				<Meta>
					<strong>Border Countries</strong>
					{!borderCountries.length ? (
						<span>There is no border countries</span>
					) : (
						<TagGroup>
							{borderCountries.map((el) => (
								<Tag
									key={el.area}
									onClick={() => {
										navigate(
											`/country/${el.name.official}`
										);
									}}
								>
									{' '}
									{el.cca3}{' '}
								</Tag>
							))}
						</TagGroup>
					)}
				</Meta>
			</div>
		</Wrapper>
	);
};

export default DetailsInfo;
