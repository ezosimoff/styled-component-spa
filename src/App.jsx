import React from 'react';
import './index.css';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Controls from './components/Controls';
import Countrieslist from './components/CountriesList';
import Spiner from './components/Spiner';
import { GET_ALL } from './config';
import Card from './components/Card';

function App() {
	const [countries, setCountries] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		axios.get(GET_ALL).then(({ data }) => {
			setCountries(data);
			setIsLoading(false);
		});
	}, []);

	return (
		<>
			{isLoading && <Spiner />}
			<Header />
			<Main>
				<Controls placeholder={'Select region'} />
				<Countrieslist>
					{countries.map((item) => {
						const info = {
							img: item.flags.svg,
							name: item.name.official,
							info: [
								{
									title: 'Capital',
									description: item.capital,
								},
								{
									title: 'Population',
									description:
										item.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: item.region,
								},
							],
						};

						return <Card key={info.name} {...info} />;
					})}
				</Countrieslist>
			</Main>
		</>
	);
}

export default App;
