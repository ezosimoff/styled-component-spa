import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Controls from '../components/Controls';
import Countrieslist from '../components/CountriesList';

const HomePage = ({ countries }) => {
	const [filtered, setFiltered] = React.useState([]);
	const navigate = useNavigate();

	React.useEffect(() => {
		setFiltered(countries);
	}, []);

	const handleSearch = (search, region) => {
		let data = [...countries];
		if (region) {
			data = data.filter((item) => item.region.includes(region));
		}
		if (search) {
			data = data.filter((item) =>
				item.name.official.toLowerCase().includes(search.toLowerCase())
			);
		}

		setFiltered(data);
	};
	return (
		<>
			<Controls
				placeholder={'Select region'}
				handleSearch={handleSearch}
			/>
			<Countrieslist>
				{filtered.map((item) => {
					const info = {
						img: item.flags.png,
						name: item.name.official,
						info: [
							{
								title: 'Capital',
								description: item.capital,
							},
							{
								title: 'Population',
								description: item.population.toLocaleString(),
							},
							{
								title: 'Region',
								description: item.region,
							},
						],
					};
					return (
						<Card
							key={info.name}
							{...info}
							click={() => navigate(`/country/${info.name}`)}
						/>
					);
				})}
			</Countrieslist>
		</>
	);
};

export default HomePage;
